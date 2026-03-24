'use client';

import Image from 'next/image';

interface ImageTextSectionProps {
  imageSrc: string;
  imageAlt: string;
  label?: string;
  title: string;
  description?: string;
  description2?: string;
  items?: string[];
  imageOnLeft?: boolean;
  variant?: 'default' | 'alt';
}

export default function ImageTextSection({
  imageSrc,
  imageAlt,
  label,
  title,
  description,
  description2,
  items,
  imageOnLeft = true,
  variant = 'default',
}: ImageTextSectionProps) {
  const sectionClass = variant === 'alt' ? 'section-alt' : 'section';

  return (
    <section className={sectionClass}>
      <div className="container">
        <div className={`its__grid ${!imageOnLeft ? 'its__grid--reversed' : ''}`}>
          <div className="its__image-wrap">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="its__image"
              loading="lazy"
            />
          </div>
          <div className="its__content">
            {label && <span className="label-uppercase">{label}</span>}
            <h2 className="heading-display its__title">{title}</h2>
            <hr className="divider" />
            {description && <p className="its__desc">{description}</p>}
            {description2 && <p className="its__desc">{description2}</p>}
            {items && items.length > 0 && (
              <ul className="its__list">
                {items.map((item, i) => (
                  <li key={i} className="its__list-item">
                    <svg className="its__check" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
