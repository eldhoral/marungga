import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './ProgramCard.css';

interface ProgramCardProps {
  slug: string;
  title: string;
  description: string;
  date?: string;
  funding?: string;
  imageUrl?: string;
}

export default function ProgramCard({ slug, title, description, date, funding, imageUrl }: ProgramCardProps) {
  return (
    <div className="program-card organic-panel">
      <div className="program-image-wrapper">
        <Image 
          src={imageUrl || "/hero_placeholder.png"} 
          alt={title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="program-image"
        />
      </div>
      <div className="program-card-header">
        <h3 className="program-title">{title}</h3>
      </div>
      <div className="program-content">
        <div className="program-meta-list">
          {date && (
            <div className="program-meta-item">
              <span className="meta-icon">📅</span>
              <span className="meta-text">{date}</span>
            </div>
          )}
          {funding && (
            <div className="program-meta-item">
              <span className="meta-icon">💰</span>
              <span className="meta-text">{funding}</span>
            </div>
          )}
        </div>
        <p className="program-desc">{description}</p>
      </div>
      <div className="program-footer">
        <Link href={`/programs/${slug}`} className="program-action">
          Pelajari Lebih Lanjut &rarr;
        </Link>
      </div>
    </div>
  );
}
