'use client'

import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function LiteYouTube({ id, title }: { id: string, title: string }) {
  return <LiteYouTubeEmbed id={id} title={title} />;
}
