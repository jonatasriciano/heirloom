'use client';

interface VideoTextSectionProps {
  videoSrc: string;
  posterSrc?: string;
  label?: string;
  title: string;
  description: string;
  description2?: string;
  videoOnLeft?: boolean;
  variant?: 'default' | 'alt';
}

export default function VideoTextSection({
  videoSrc,
  posterSrc,
  label,
  title,
  description,
  description2,
  videoOnLeft = true,
  variant = 'default',
}: VideoTextSectionProps) {
  const sectionClass = variant === 'alt' ? 'section-alt' : 'section';

  return (
    <section className={sectionClass}>
      <div className="container">
        <div className={`vts__grid ${!videoOnLeft ? 'vts__grid--reversed' : ''}`}>
          <div className="vts__video-wrap">
            <video
              src={videoSrc}
              poster={posterSrc}
              className="vts__video"
              controls
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="vts__content">
            {label && <span className="label-uppercase">{label}</span>}
            <h2 className="heading-display vts__title">{title}</h2>
            <hr className="divider" />
            <p className="vts__desc">{description}</p>
            {description2 && <p className="vts__desc">{description2}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
