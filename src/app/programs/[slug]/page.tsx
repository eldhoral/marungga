import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ALL_PROGRAMS } from "@/data/programs";
import Button from "@/components/Button";
import "./page.css";

// Generate static params for build time (optional but good for performance)
export function generateStaticParams() {
  return ALL_PROGRAMS.map((program) => ({
    slug: program.slug,
  }));
}

export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const program = ALL_PROGRAMS.find((p) => p.slug === resolvedParams.slug);

  if (!program) {
    notFound();
  }

  // Format the content string into paragraphs
  const paragraphs = program.content?.split('\n').filter(p => p.trim() !== '') || [program.description];

  return (
    <div className="program-detail-page animate-fade-in pb-xl">
      <div className="detail-header-wrapper section-light">
        <div className="container relative z-10">
          <Link href="/programs" className="back-link mb-md inline-block text-primary hover:text-primary-dark font-medium transition-colors">
            &larr; Kembali ke Program
          </Link>
          <div className="detail-header-content max-w-4xl">
            <h1 className="detail-title text-primary-dark text-4xl md:text-5xl mb-sm">{program.title}</h1>
            <div className="program-meta-list detail-meta flex flex-wrap gap-md mt-sm">
              {program.date && (
                <div className="program-meta-item flex items-center gap-xs bg-surface-alt px-sm py-xs rounded-md">
                  <span className="meta-icon text-xl">📅</span>
                  <span className="meta-text text-muted font-medium">{program.date}</span>
                </div>
              )}
              {program.funding && (
                <div className="program-meta-item flex items-center gap-xs bg-surface-alt px-sm py-xs rounded-md">
                  <span className="meta-icon text-xl">💰</span>
                  <span className="meta-text text-muted font-medium">{program.funding}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="blob blob-primary" style={{ top: '-10%', right: '10%', width: '300px', height: '300px', opacity: 0.2 }}></div>
      </div>

      <div className="container mt-lg">
        <div className="detail-layout">
          <div className="detail-main organic-panel">
            <div className="detail-image-container relative w-full">
              <Image 
                src={program.imageUrl || "/hero_placeholder.png"} 
                alt={program.title} 
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="detail-image object-cover"
              />
            </div>
            
            <div className="detail-text-content p-lg md:p-xl text-lg text-text leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i} className="mb-md">{p}</p>
              ))}
            </div>

            {program.galleryUrls && program.galleryUrls.length > 0 && (
              <div className="detail-gallery p-lg md:p-xl border-t border-border">
                <h3 className="text-2xl text-primary-dark mb-md">Galeri Kegiatan</h3>
                <div className="gallery-grid">
                  {program.galleryUrls.map((url, i) => (
                    <div key={i} className="gallery-item-container relative w-full rounded-lg overflow-hidden">
                      <Image 
                        src={url} 
                        alt={`Galeri Kegiatan ${i + 1}`} 
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="gallery-image object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="detail-sidebar mt-lg md:mt-0">
             <div className="organic-panel p-lg sticky top-[100px]">
               <h3 className="mb-sm text-2xl text-primary-dark">Tertarik Mendukung?</h3>
               <p className="text-muted mb-md text-md">
                 Program seperti ini membutuhkan partisipasi aktif dari semua elemen masyarakat. Mari berkontribusi untuk dampak yang lebih luas.
               </p>
               <Button as={Link} href="/contact" variant="primary" className="w-full text-center">Dukung Kami</Button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
