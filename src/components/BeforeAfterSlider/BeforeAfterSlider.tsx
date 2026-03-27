'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import './BeforeAfterSlider.css';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, beforeLabel = 'Before', afterLabel = 'After' }: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const move = useCallback((clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  return (
    <div ref={ref} className="ba-slider" onMouseMove={e => dragging && move(e.clientX)} onMouseUp={() => setDragging(false)} onMouseLeave={() => setDragging(false)} onTouchMove={e => move(e.touches[0].clientX)} onTouchEnd={() => setDragging(false)}>
      <Image src={afterImage} alt={afterLabel} fill sizes="(max-width: 768px) 100vw, 50vw" className="ba-slider__img" draggable={false} loading="lazy" />
      <div className="ba-slider__before" style={{ width: `${pos}%` }}>
        <div className="ba-slider__before-inner" style={{ width: `${100 / pos * 100}%` }}>
          <Image src={beforeImage} alt={beforeLabel} fill sizes="(max-width: 768px) 100vw, 50vw" className="ba-slider__img" draggable={false} loading="lazy" />
        </div>
      </div>
      <span className="ba-slider__label ba-slider__label--left">{beforeLabel}</span>
      <span className="ba-slider__label ba-slider__label--right">{afterLabel}</span>
      <div className="ba-slider__handle" style={{ left: `${pos}%` }} onMouseDown={() => setDragging(true)} onTouchStart={() => setDragging(true)}>
        <div className="ba-slider__knob">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 8l4 4-4 4M6 8l-4 4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </div>
    </div>
  );
}
