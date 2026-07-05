'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

type ResearchProduct = {
  id: string
  title: string
  cover_url: string | null
}

export function ResearchCarousel({ products }: { products: ResearchProduct[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 3000, stopOnInteraction: true })
  ])

  if (!products || products.length === 0) {
    return <p className="text-muted text-center col-span-full">Belum ada produk riset.</p>
  }

  return (
    <div className="embla select-none cursor-grab active:cursor-grabbing" ref={emblaRef}>
      <div className="embla__container flex">
        {products.map((product, index) => (
          <div key={product.id} className="embla__slide flex-shrink-0" style={{ flex: '0 0 auto', paddingRight: '2rem' }}>
            <div className="research-card organic-panel text-center h-full">
              <div className="research-placeholder bg-surface-alt flex items-center justify-center p-md border border-border border-dashed mb-sm rounded-md overflow-hidden relative" style={{ aspectRatio: '3/4', width: '100%' }}>
                {product.cover_url ? (
                  <Image 
                    src={product.cover_url} 
                    alt={product.title} 
                    fill 
                    className="object-cover pointer-events-none select-none"
                    sizes="(max-width: 768px) 250px, 320px" 
                    priority={index < 3}
                    draggable={false}
                  />
                ) : (
                  <span className="text-muted text-sm italic">[Cover Buku]</span>
                )}
              </div>
              <h4 className="text-md font-bold text-text mt-4">{product.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
