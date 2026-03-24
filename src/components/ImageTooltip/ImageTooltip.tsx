'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface ImageTooltipProps {
  text: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ImageTooltip({ text, imageSrc, imageAlt }: ImageTooltipProps) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLSpanElement>(null);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setPosition({
      top: rect.top - 8,
      left: rect.left + rect.width / 2,
    });
  }, []);

  useEffect(() => {
    if (!visible) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
        setVisible(false);
      }
    };
    const handleScroll = () => setVisible(false);
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visible]);

  const handleEnter = () => {
    updatePosition();
    setVisible(true);
  };

  return (
    <span
      ref={triggerRef}
      className="img-tooltip"
      onMouseEnter={handleEnter}
      onMouseLeave={() => setVisible(false)}
      onClick={() => { updatePosition(); setVisible(v => !v); }}
    >
      {text}
      {visible && (
        <span
          className="img-tooltip__popup"
          style={{ top: position.top, left: position.left }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={300}
            height={200}
            sizes="300px"
            className="img-tooltip__image"
          />
        </span>
      )}
    </span>
  );
}
