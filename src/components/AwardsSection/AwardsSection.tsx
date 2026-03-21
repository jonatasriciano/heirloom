'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const awards = [
  { key: 'carpetsDyeTech', image: '/images/awardsAffiliations/carpets-dye-tech.webp' },
  { key: 'arcs', image: '/images/awardsAffiliations/arcs.webp' },
  { key: 'rugRangers', image: '/images/awardsAffiliations/rug-rangers.webp' },
] as const;

export default function AwardsSection() {
  const t = useTranslations('awards');

  return (
    <section className="section-alt">
      <div className="container">
        <h2 className="heading-display awards__title">{t('title')}</h2>
        <div className="awards__grid">
          {awards.map((a) => (
            <div key={a.key} className="awards__item">
              <Image
                src={a.image}
                alt={t(`items.${a.key}`)}
                width={200}
                height={120}
                className="awards__image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
