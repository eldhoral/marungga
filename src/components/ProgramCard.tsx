import React from 'react';
import './ProgramCard.css';

interface ProgramCardProps {
  title: string;
  description: string;
  date?: string;
  funding?: string;
}

export default function ProgramCard({ title, description, date, funding }: ProgramCardProps) {
  return (
    <div className="program-card organic-panel">
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
        <span className="program-action">Pelajari Lebih Lanjut &rarr;</span>
      </div>
    </div>
  );
}
