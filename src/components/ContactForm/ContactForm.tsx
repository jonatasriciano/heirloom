'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { submitContact } from '@/lib/submit-contact';
import './ContactForm.css';

export default function ContactForm() {
  const t = useTranslations('contactForm');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = `${data.get('firstName')} ${data.get('lastName')}`.trim();
    const email = (data.get('email') as string) || '';
    const phone = (data.get('phone') as string) || '';

    const address = [data.get('street'), data.get('city'), data.get('st'), data.get('zip')]
      .filter(Boolean).join(', ');
    const msg = (data.get('message') as string) || '';
    const message = address ? `Address: ${address}\n\n${msg}` : msg;

    const result = await submitContact({ name, email, phone, message });
    setStatus(result.success ? 'sent' : 'error');
    if (result.success) form.reset();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h2 className="contact-form__title">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="contact-form__title-icon">
          <rect x="2" y="4" width="16" height="12" rx="2" stroke="var(--accent-primary)" strokeWidth="1.5"/>
          <path d="M2 6l8 5 8-5" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {t('formTitle')}
      </h2>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="firstName">{t('firstName')} <span className="contact-form__required">*</span></label>
          <input id="firstName" name="firstName" type="text" required className="contact-form__input" />
        </div>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="lastName">{t('lastName')} <span className="contact-form__required">*</span></label>
          <input id="lastName" name="lastName" type="text" required className="contact-form__input" />
        </div>
      </div>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="street">{t('streetAddress')}</label>
        <input id="street" name="street" type="text" className="contact-form__input" />
      </div>
      <div className="contact-form__row contact-form__row--3">
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="city">{t('city')}</label>
          <input id="city" name="city" type="text" className="contact-form__input" />
        </div>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="st">{t('st')}</label>
          <input id="st" name="st" type="text" className="contact-form__input" />
        </div>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="zip">{t('zip')}</label>
          <input id="zip" name="zip" type="text" className="contact-form__input" />
        </div>
      </div>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="phone">{t('phone')} <span className="contact-form__required">*</span></label>
          <input id="phone" name="phone" type="tel" required className="contact-form__input" />
        </div>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="email">{t('email')} <span className="contact-form__required">*</span></label>
          <input id="email" name="email" type="email" required className="contact-form__input" />
        </div>
      </div>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="message">{t('message')}</label>
        <textarea id="message" name="message" rows={3} className="contact-form__textarea" />
      </div>
      <div className="contact-form__actions">
        <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'sending'}>
          {status === 'sending' ? t('sending') : t('send')}
        </button>
        {status === 'sent' && <p className="contact-form__success">{t('successMessage')}</p>}
        {status === 'error' && <p className="contact-form__error">{t('errorMessage')}</p>}
      </div>
    </form>
  );
}
