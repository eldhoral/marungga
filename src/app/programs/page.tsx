import { createClient } from "@/utils/supabase/server";
import { ProgramsList } from "./ProgramsList";
import "./page.css";

export const revalidate = 60;

export default async function Programs() {
  const supabase = await createClient();
  
  // Fetch programs page content
  const { data: contentData } = await supabase
    .from('marungga_content_blocks')
    .select('section_key, content_text')
    .eq('page', 'programs');

  const content: Record<string, string> = {};
  contentData?.forEach(item => {
    content[item.section_key] = item.content_text;
  });

  // Default content fallbacks
  const heroTitle = content['hero_title'] || 'Program Kami';
  const heroDescription = content['hero_description'] || 'Jejak langkah dan karya Yayasan Masyarakat Tangguh Sejahtera (Marungga Foundation) dalam mewujudkan masyarakat Indonesia Timur yang tangguh.';

  // Fetch programs
  const { data: programs } = await supabase
    .from('marungga_programs')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="programs-page animate-fade-in relative">
      <div className="blob blob-accent" style={{ top: '10%', right: '10%', width: '400px', height: '400px', opacity: 0.3 }}></div>

      <section className="programs-header text-center">
        <div className="container relative z-10">
          <div className="organic-panel inline-block p-xl rounded-xl">
            <h1 className="text-5xl font-jakarta font-bold text-primary-dark mb-md" dangerouslySetInnerHTML={{ __html: heroTitle }}></h1>
            <p className="max-w-2xl mx-auto text-muted text-xl" dangerouslySetInnerHTML={{ __html: heroDescription }}></p>
          </div>
        </div>
      </section>

      <section className="section relative z-10">
        <div className="container">
          <ProgramsList programs={programs || []} />
        </div>
      </section>
    </div>
  );
}
