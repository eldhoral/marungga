import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Tag } from 'lucide-react';
import './ProgramCard.css';

interface ProgramCardProps {
  slug: string;
  title: string;
  description: string;
  date?: string;
  funding?: string;
  location?: string;
  imageUrl?: string;
  priority?: boolean;
}

export default function ProgramCard({ slug, title, description, date, funding, location, imageUrl, priority = false }: ProgramCardProps) {
  return (
    <div className="program-card organic-panel">
      <div className="program-image-wrapper">
        <Image 
          src={imageUrl || "/IMG-20250526-WA0049.jpg"} 
          alt={title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="program-image"
          priority={priority}
        />
      </div>
      <div className="program-card-header">
        <h3 className="program-title">{title}</h3>
      </div>
      <div className="program-content">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {date && (
            <div className="flex items-center gap-1.5 bg-surface-alt border border-border px-2.5 py-1 rounded-md text-xs font-medium text-muted-foreground max-w-full">
              <Calendar className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span className="truncate">{date}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center gap-1.5 bg-surface-alt border border-border px-2.5 py-1 rounded-md text-xs font-medium text-muted-foreground max-w-full">
              <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span className="truncate">{location}</span>
            </div>
          )}
          {funding && (
            <div className="flex items-start gap-1.5 bg-surface-alt border border-border px-2.5 py-1 rounded-md text-xs font-medium text-muted-foreground max-w-full">
              <Tag className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
              <span className="line-clamp-2 text-left">{funding}</span>
            </div>
          )}
        </div>
        <p className="program-desc line-clamp-4 text-muted-foreground">{description}</p>
      </div>
      <div className="program-footer">
        <Link href={`/programs/${slug}`} className="program-action">
          Pelajari Lebih Lanjut &rarr;
        </Link>
      </div>
    </div>
  );
}
