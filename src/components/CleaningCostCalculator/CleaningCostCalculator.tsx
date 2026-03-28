'use client';

import { useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { submitContact } from '@/lib/submit-contact';
import Tooltip from '@/components/Tooltip/Tooltip';
import './CleaningCostCalculator.css';

interface ServiceOption {
  label: string;
  rate: number;
}

interface CalculatorRow {
  id: number;
  service: string;
  rate: number;
  shape: 'Rectangle' | 'Circle' | '';
  // Rectangle
  lengthFt: string;
  lengthIn: string;
  widthFt: string;
  widthIn: string;
  // Circle
  radiusFt: string;
  radiusIn: string;
  // Computed
  area: number;
  quantity: string;
  total: number;
  belowMinimum: boolean;
}

const MINIMUM_TOTAL = 100;

const SERVICES: ServiceOption[] = [
  { label: 'Silk', rate: 10.0 },
  { label: 'Artificial Silk', rate: 8.0 },
  { label: 'Wool Washing', rate: 4.0 },
  { label: 'Synthetic', rate: 2.5 },
  { label: 'Underlays 1/4th inch', rate: 3.5 },
  { label: 'Underlays 3/16th inch', rate: 3.0 },
  { label: 'Underlays 1/8th inch', rate: 2.5 },
  { label: 'Disinfecting', rate: 1.0 },
];

function createEmptyRow(id: number): CalculatorRow {
  return {
    id,
    service: '',
    rate: 0,
    shape: '',
    lengthFt: '', lengthIn: '',
    widthFt: '', widthIn: '',
    radiusFt: '', radiusIn: '',
    area: 0,
    quantity: '1',
    total: 0,
    belowMinimum: false,
  };
}

function calcArea(row: CalculatorRow): number {
  if (row.shape === 'Circle') {
    const diameter = parseFloat(row.radiusFt || '0') + parseFloat(row.radiusIn || '0') / 12;
    if (diameter <= 0) return 0;
    const radius = diameter / 2;
    return Math.round(Math.PI * radius * radius * 100) / 100;
  }
  if (row.shape === 'Rectangle') {
    const length = parseFloat(row.lengthFt || '0') + parseFloat(row.lengthIn || '0') / 12;
    const width = parseFloat(row.widthFt || '0') + parseFloat(row.widthIn || '0') / 12;
    if (length <= 0 || width <= 0) return 0;
    return Math.round(length * width * 100) / 100;
  }
  return 0;
}

function calcTotal(area: number, quantity: number, rate: number): { total: number; belowMinimum: boolean } {
  if (area <= 0 || quantity <= 0 || rate <= 0) return { total: 0, belowMinimum: false };
  const raw = area * quantity * rate;
  const belowMinimum = raw < MINIMUM_TOTAL;
  return { total: Math.round(Math.max(raw, MINIMUM_TOTAL) * 100) / 100, belowMinimum };
}

function formatCurrency(value: number): string {
  return value.toLocaleString('en-CA', { style: 'currency', currency: 'CAD' });
}

export default function CleaningCostCalculator() {
  const t = useTranslations('calculator');
  const [rows, setRows] = useState<CalculatorRow[]>([
    createEmptyRow(1),
    createEmptyRow(2),
  ]);
  const [quoteStatus, setQuoteStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const updateRow = useCallback((id: number, updates: Partial<CalculatorRow>) => {
    setRows(prev => prev.map(row => {
      if (row.id !== id) return row;
      const updated = { ...row, ...updates };
      const area = calcArea(updated);
      const qty = parseInt(updated.quantity) || 0;
      const { total, belowMinimum } = calcTotal(area, qty, updated.rate);
      return { ...updated, area, total, belowMinimum };
    }));
  }, []);

  const handleServiceChange = useCallback((id: number, serviceLabel: string) => {
    const service = SERVICES.find(s => s.label === serviceLabel);
    updateRow(id, {
      service: serviceLabel,
      rate: service?.rate ?? 0,
    });
  }, [updateRow]);

  const handleShapeChange = useCallback((id: number, shape: CalculatorRow['shape']) => {
    updateRow(id, {
      shape,
      lengthFt: '', lengthIn: '',
      widthFt: '', widthIn: '',
      radiusFt: '', radiusIn: '',
    });
  }, [updateRow]);

  const addRow = useCallback(() => {
    setRows(prev => [...prev, createEmptyRow(prev.length + 1)]);
  }, []);

  const removeRow = useCallback((id: number) => {
    setRows(prev => {
      if (prev.length <= 1) return prev;
      return prev.filter(r => r.id !== id).map((r, i) => ({ ...r, id: i + 1 }));
    });
  }, []);

  const subtotal = Math.round(rows.reduce((sum, row) => sum + row.total, 0) * 100) / 100;

  const numericOnly = (value: string) => value.replace(/[^0-9.]/g, '');

  const buildQuoteMessage = () => {
    const items = rows
      .filter(r => r.total > 0)
      .map(r => `• ${r.service} (${r.shape}) — ${r.area} sq ft × ${r.quantity} @ ${formatCurrency(r.rate)}/sq ft = ${formatCurrency(r.total)}${r.belowMinimum ? ' (minimum applied)' : ''}`)
      .join('\n');
    return `Cleaning Cost Estimate Request\n\n${items}\n\nEstimated Subtotal: ${formatCurrency(subtotal)} (plus GST)`;
  };

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get('quoteName') as string || '').trim();
    const email = (data.get('quoteEmail') as string || '').trim();
    const phone = (data.get('quotePhone') as string || '').trim();

    if (!name || !email || !phone) {
      form.reportValidity();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      form.reportValidity();
      return;
    }

    setQuoteStatus('sending');
    const result = await submitContact({
      name,
      email,
      phone,
      message: buildQuoteMessage(),
    });
    setQuoteStatus(result.success ? 'sent' : 'error');
    if (result.success) form.reset();
  };

  return (
    <div className="calc">

      {/* Desktop table */}
      <div className="calc__table-wrap">
        <table className="calc__table">
          <thead>
            <tr>
              <th className="calc__th calc__th--num">#</th>
              <th className="calc__th">{t('type')}</th>
              <th className="calc__th">{t('shape')}</th>
              <th className="calc__th">{t('size')}</th>
              <th className="calc__th">{t('area')}</th>
              <th className="calc__th calc__th--qty">{t('qty')}</th>
              <th className="calc__th">{t('rate')}</th>
              <th className="calc__th">{t('total')}</th>
              <th className="calc__th calc__th--action"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="calc__row">
                <td className="calc__td calc__td--num">{row.id}</td>
                <td className="calc__td">
                  <select
                    className="calc__select"
                    value={row.service}
                    onChange={(e) => handleServiceChange(row.id, e.target.value)}
                    aria-label={t('type')}
                  >
                    <option value="">{t('selectService')}</option>
                    {SERVICES.map(s => (
                      <option key={s.label} value={s.label}>{s.label}</option>
                    ))}
                  </select>
                </td>
                <td className="calc__td">
                  <select
                    className="calc__select"
                    value={row.shape}
                    onChange={(e) => handleShapeChange(row.id, e.target.value as CalculatorRow['shape'])}
                    aria-label={t('shape')}
                  >
                    <option value="">{t('selectShape')}</option>
                    <option value="Rectangle">{t('rectangle')}</option>
                    <option value="Circle">{t('circle')}</option>
                  </select>
                </td>
                <td className="calc__td calc__td--size">
                  {row.shape === 'Rectangle' && (
                    <div className="calc__size-inputs">
                      <div className="calc__size-group">
                        <input type="text" inputMode="decimal" placeholder="ft" className="calc__input calc__input--sm"
                          value={row.lengthFt} onChange={e => updateRow(row.id, { lengthFt: numericOnly(e.target.value) })}
                          aria-label={t('lengthFt')} />
                        <input type="text" inputMode="decimal" placeholder="in" className="calc__input calc__input--sm"
                          value={row.lengthIn} onChange={e => updateRow(row.id, { lengthIn: numericOnly(e.target.value) })}
                          aria-label={t('lengthIn')} />
                      </div>
                      <span className="calc__size-x">×</span>
                      <div className="calc__size-group">
                        <input type="text" inputMode="decimal" placeholder="ft" className="calc__input calc__input--sm"
                          value={row.widthFt} onChange={e => updateRow(row.id, { widthFt: numericOnly(e.target.value) })}
                          aria-label={t('widthFt')} />
                        <input type="text" inputMode="decimal" placeholder="in" className="calc__input calc__input--sm"
                          value={row.widthIn} onChange={e => updateRow(row.id, { widthIn: numericOnly(e.target.value) })}
                          aria-label={t('widthIn')} />
                      </div>
                    </div>
                  )}
                  {row.shape === 'Circle' && (
                    <div className="calc__size-inputs">
                      <div className="calc__size-group">
                        <input type="text" inputMode="decimal" placeholder="ft" className="calc__input calc__input--sm"
                          value={row.radiusFt} onChange={e => updateRow(row.id, { radiusFt: numericOnly(e.target.value) })}
                          aria-label={t('radiusFt')} />
                        <input type="text" inputMode="decimal" placeholder="in" className="calc__input calc__input--sm"
                          value={row.radiusIn} onChange={e => updateRow(row.id, { radiusIn: numericOnly(e.target.value) })}
                          aria-label={t('radiusIn')} />
                      </div>
                    </div>
                  )}
                  {!row.shape && <span className="calc__placeholder-text">—</span>}
                </td>
                <td className="calc__td calc__td--computed">
                  {row.area > 0 ? `${row.area} sq ft` : '—'}
                </td>
                <td className="calc__td">
                  <input type="text" inputMode="numeric" className="calc__input calc__input--qty"
                    value={row.quantity} onChange={e => updateRow(row.id, { quantity: e.target.value.replace(/[^0-9]/g, '') })}
                    aria-label={t('qty')} />
                </td>
                <td className="calc__td calc__td--computed">
                  {row.rate > 0 ? formatCurrency(row.rate) : '—'}
                </td>
                <td className="calc__td calc__td--total">
                  {row.total > 0 ? (
                    <span className="calc__total-wrap">
                      {formatCurrency(row.total)}
                      {row.belowMinimum && (
                        <Tooltip text={t('minimumApplied')}>
                          <span className="calc__min-badge">
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                              <path d="M8 7v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                              <circle cx="8" cy="5" r="0.75" fill="currentColor"/>
                            </svg>
                          </span>
                        </Tooltip>
                      )}
                    </span>
                  ) : '—'}
                </td>
                <td className="calc__td calc__td--action">
                  {rows.length > 1 && (
                    <button className="calc__delete-btn" onClick={() => removeRow(row.id)}
                      aria-label={t('deleteRow')} title={t('deleteRow')}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2 4h12M5.333 4V2.667a1.333 1.333 0 011.334-1.334h2.666a1.333 1.333 0 011.334 1.334V4m2 0v9.333a1.333 1.333 0 01-1.334 1.334H4.667a1.333 1.333 0 01-1.334-1.334V4h9.334z"
                          stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="calc__cards">
        {rows.map((row) => (
          <div key={row.id} className="calc__card">
            <div className="calc__card-header">
              <span className="calc__card-num">#{row.id}</span>
              {rows.length > 1 && (
                <button className="calc__delete-btn" onClick={() => removeRow(row.id)}
                  aria-label={t('deleteRow')}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 4h12M5.333 4V2.667a1.333 1.333 0 011.334-1.334h2.666a1.333 1.333 0 011.334 1.334V4m2 0v9.333a1.333 1.333 0 01-1.334 1.334H4.667a1.333 1.333 0 01-1.334-1.334V4h9.334z"
                      stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
            </div>
            <div className="calc__card-field">
              <label className="calc__card-label">{t('type')}</label>
              <select className="calc__select" value={row.service}
                onChange={(e) => handleServiceChange(row.id, e.target.value)}>
                <option value="">{t('selectService')}</option>
                {SERVICES.map(s => <option key={s.label} value={s.label}>{s.label}</option>)}
              </select>
            </div>
            <div className="calc__card-field">
              <label className="calc__card-label">{t('shape')}</label>
              <select className="calc__select" value={row.shape}
                onChange={(e) => handleShapeChange(row.id, e.target.value as CalculatorRow['shape'])}>
                <option value="">{t('selectShape')}</option>
                <option value="Rectangle">{t('rectangle')}</option>
                <option value="Circle">{t('circle')}</option>
              </select>
            </div>
            {row.shape === 'Rectangle' && (
              <div className="calc__card-field">
                <label className="calc__card-label">{t('size')}</label>
                <div className="calc__size-inputs">
                  <div className="calc__size-group">
                    <input type="text" inputMode="decimal" placeholder="ft" className="calc__input calc__input--sm"
                      value={row.lengthFt} onChange={e => updateRow(row.id, { lengthFt: numericOnly(e.target.value) })} />
                    <input type="text" inputMode="decimal" placeholder="in" className="calc__input calc__input--sm"
                      value={row.lengthIn} onChange={e => updateRow(row.id, { lengthIn: numericOnly(e.target.value) })} />
                  </div>
                  <span className="calc__size-x">×</span>
                  <div className="calc__size-group">
                    <input type="text" inputMode="decimal" placeholder="ft" className="calc__input calc__input--sm"
                      value={row.widthFt} onChange={e => updateRow(row.id, { widthFt: numericOnly(e.target.value) })} />
                    <input type="text" inputMode="decimal" placeholder="in" className="calc__input calc__input--sm"
                      value={row.widthIn} onChange={e => updateRow(row.id, { widthIn: numericOnly(e.target.value) })} />
                  </div>
                </div>
              </div>
            )}
            {row.shape === 'Circle' && (
              <div className="calc__card-field">
                <label className="calc__card-label">{t('size')} ({t('radius')})</label>
                <div className="calc__size-inputs">
                  <div className="calc__size-group">
                    <input type="text" inputMode="decimal" placeholder="ft" className="calc__input calc__input--sm"
                      value={row.radiusFt} onChange={e => updateRow(row.id, { radiusFt: numericOnly(e.target.value) })} />
                    <input type="text" inputMode="decimal" placeholder="in" className="calc__input calc__input--sm"
                      value={row.radiusIn} onChange={e => updateRow(row.id, { radiusIn: numericOnly(e.target.value) })} />
                  </div>
                </div>
              </div>
            )}
            <div className="calc__card-row">
              <div className="calc__card-field calc__card-field--half">
                <label className="calc__card-label">{t('area')}</label>
                <span className="calc__card-value">{row.area > 0 ? `${row.area} sq ft` : '—'}</span>
              </div>
              <div className="calc__card-field calc__card-field--half">
                <label className="calc__card-label">{t('qty')}</label>
                <input type="text" inputMode="numeric" className="calc__input calc__input--qty"
                  value={row.quantity} onChange={e => updateRow(row.id, { quantity: e.target.value.replace(/[^0-9]/g, '') })} />
              </div>
            </div>
            <div className="calc__card-row">
              <div className="calc__card-field calc__card-field--half">
                <label className="calc__card-label">{t('rate')}</label>
                <span className="calc__card-value">{row.rate > 0 ? formatCurrency(row.rate) : '—'}</span>
              </div>
              <div className="calc__card-field calc__card-field--half">
                <label className="calc__card-label">{t('total')}</label>
                <span className="calc__card-value calc__card-value--accent">
                  {row.total > 0 ? (
                    <span className="calc__total-wrap">
                      {formatCurrency(row.total)}
                      {row.belowMinimum && (
                        <Tooltip text={t('minimumApplied')}>
                          <span className="calc__min-badge">
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                              <path d="M8 7v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                              <circle cx="8" cy="5" r="0.75" fill="currentColor"/>
                            </svg>
                          </span>
                        </Tooltip>
                      )}
                    </span>
                  ) : '—'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="calc__footer">
        <button className="calc__add-btn" onClick={addRow}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3.333v9.334M3.333 8h9.334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          {t('addRow')}
        </button>
        <div className="calc__subtotal">
          <span className="calc__subtotal-label">{t('subtotal')}:</span>
          <span className="calc__subtotal-value">{formatCurrency(subtotal)} <span className="calc__subtotal-gst">(plus GST)</span></span>
        </div>
      </div>

      {/* Quote Request Form */}
      {subtotal > 0 && (
        <form className="calc__quote" onSubmit={handleQuoteSubmit}>
          <h3 className="calc__quote-title">{t('quoteTitle') || 'Request a Quote'}</h3>
          <p className="calc__quote-desc">{t('quoteDesc') || 'Fill in your details and we\'ll get back to you with a confirmed quote.'}</p>
          <div className="calc__quote-fields">
            <input name="quoteName" type="text" required placeholder={t('quoteName') || 'Full Name *'} className="calc__input" />
            <input name="quoteEmail" type="email" required placeholder={t('quoteEmail') || 'Email *'} className="calc__input" />
            <input name="quotePhone" type="tel" required placeholder={t('quotePhone') || 'Phone *'} className="calc__input" />
          </div>
          <button type="submit" className="btn btn-primary btn-lg" disabled={quoteStatus === 'sending'}>
            {quoteStatus === 'sending' ? (t('quoteSending') || 'Sending...') : (t('quoteSubmit') || 'Send Quote Request')}
          </button>
          {quoteStatus === 'sent' && <p className="calc__quote-success">{t('quoteSuccess') || 'Quote request sent! We\'ll be in touch soon.'}</p>}
          {quoteStatus === 'error' && <p className="calc__quote-error">{t('quoteError') || 'Something went wrong. Please try again.'}</p>}
        </form>
      )}
    </div>
  );
}
