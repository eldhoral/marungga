import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import Button from "@/components/Button";
import "./page.css";

export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const supabase = await createClient();

  const { data: program, error } = await supabase
    .from('marungga_programs')
    .select('*')
    .eq('id', resolvedParams.slug)
    .single();

  if (error || !program) {
    notFound();
  }

  // Format the content string into paragraphs
  // If we have content blocks in a different table, we could fetch them here.
  // For now, let's assume content is in description. 
  // If we have rich text, we could just render it directly via dangerouslySetInnerHTML
  const paragraphs = program.description?.split('\n').filter((p: string) => p.trim() !== '') || [];

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
              {program.year && (
                <div className="program-meta-item flex items-center gap-xs bg-surface-alt px-sm py-xs rounded-md">
                  <span className="meta-icon text-xl">📅</span>
                  <span className="meta-text text-muted font-medium">{program.year}</span>
                </div>
              )}
              {program.category && (
                <div className="program-meta-item flex items-center gap-xs bg-surface-alt px-sm py-xs rounded-md">
                  <span className="meta-icon text-xl">💰</span>
                  <span className="meta-text text-muted font-medium">{program.category}</span>
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
                src={program.image_url || "/IMG-20250526-WA0049.jpg"} 
                alt={program.title} 
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="detail-image object-cover"
              />
            </div>
            
            <div className="detail-text-content p-lg md:p-xl text-lg text-text leading-relaxed">
              {paragraphs.map((p: string, i: number) => (
                <p key={i} className="mb-md">{p}</p>
              ))}
            </div>
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
