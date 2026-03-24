'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import './Tooltip.css';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom';
  maxWidth?: number;
}

export default function Tooltip({ text, children, position = 'top', maxWidth = 260 }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const show = useCallback(() => setVisible(true), []);
  const hide = useCallback(() => setVisible(false), []);

  useEffect(() => {
    if (!visible || !triggerRef.current || !tooltipRef.current) {
      setCoords(null);
      return;
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    let top: number;
    if (position === 'bottom') {
      top = triggerRect.bottom + 6;
    } else {
      top = triggerRect.top - tooltipRect.height - 6;
    }

    let left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;

    // Keep within viewport
    const padding = 8;
    if (left < padding) left = padding;
    if (left + tooltipRect.width > window.innerWidth - padding) {
      left = window.innerWidth - padding - tooltipRect.width;
    }

    setCoords({ top, left });
  }, [visible, position]);

  return (
    <span
      ref={triggerRef}
      className="tooltip__trigger"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {visible && (
        <div
          ref={tooltipRef}
          className={`tooltip__bubble ${coords ? 'tooltip__bubble--visible' : ''}`}
          role="tooltip"
          style={{
            position: 'fixed',
            top: coords?.top ?? -9999,
            left: coords?.left ?? -9999,
            maxWidth,
          }}
        >
          {text}
        </div>
      )}
    </span>
  );
}
