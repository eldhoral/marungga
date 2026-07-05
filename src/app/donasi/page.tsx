import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import Button from '@/components/Button';
import CopyButton from '@/components/CopyButton';
import { Heart, CheckCircle, ArrowRight, CreditCard } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function DonasiPage() {
  const supabase = await createClient();

  // Fetch content blocks for the donation page
  const { data: contentBlocks } = await supabase
    .from('marungga_content_blocks')
    .select('*')
    .eq('page', 'donasi');

  // Create a helper to easily access content by key
  const getContent = (key: string, fallback: string) => {
    const block = contentBlocks?.find(b => b.section_key === key);
    return block ? block.content_text : fallback;
  };

  const heroTitle = getContent('hero_title', 'Mari Wujudkan Perubahan Bersama');
  const impactDesc = getContent('impact_description', 'Donasi Anda sangat berarti untuk mendukung program-program kami.');
  const benefit1 = getContent('benefit_1', 'Pendidikan');
  const benefit2 = getContent('benefit_2', 'Kesehatan');
  const benefit3 = getContent('benefit_3', 'Pemberdayaan Ekonomi');
  const bankDetails = getContent('bank_details', 'BNI\\n1132035425\\nYayasan Masyarakat Tangguh');
  
  // Format bank details to display nicely with line breaks. Replace literal '\n' string from DB with actual newline character.
  const bankLines = bankDetails.replace(/\\n/g, '\n').split('\n');
  const formattedBankDetails = bankLines.map((line: string, i: number) => {
    if (i === 1) {
      return (
        <div key={i} className="flex items-center justify-center my-3 group">
          {/* Spacer transparan di kiri untuk menyeimbangkan posisi tombol di kanan */}
          <div className="w-10 opacity-0 pointer-events-none"></div>
          
          <span className="font-mono text-3xl tracking-widest text-primary-dark mx-3">{line}</span>
          
          {/* Tombol Copy di kanan */}
          <div className="w-10 flex justify-start">
            <CopyButton textToCopy={line} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      );
    }
    
    let styles = "block mb-1 ";
    if (i === 0) styles += "text-primary text-xl font-medium";
    else styles += "text-lg font-medium";
    
    return <span key={i} className={styles}>{line}</span>;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden flex justify-center items-center py-20 md:py-24">
        <div className="container relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full mb-6">
            <Heart className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6 tracking-tight">
            {heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-muted mb-10 leading-relaxed">
            {impactDesc}
          </p>
        </div>
        <div className="blob blob-primary" style={{ top: '-10%', right: '10%', width: '400px', height: '400px', opacity: 0.1 }}></div>
      </section>

      {/* Content Section */}
      <section className="pb-24">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Impact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">Area Dampak Utama</h2>
              <div className="space-y-4">
                {[benefit1, benefit2, benefit3].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-surface/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-text mb-1">{benefit}</h3>
                      <p className="text-muted-foreground text-sm">
                        {idx === 0 ? "Investasi untuk masa depan dan peningkatan kualitas hidup generasi penerus." : 
                         idx === 1 ? "Menjamin akses ke fasilitas dan edukasi yang memadai untuk kesejahteraan." : 
                         "Membangun kemandirian ekonomi keluarga demi ketahanan komunitas."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Donation Instructions */}
            <div className="p-8 md:p-10 rounded-2xl border-2 border-primary/20 bg-surface relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <CreditCard className="w-32 h-32" />
              </div>
              <h2 className="text-2xl font-semibold text-primary-dark mb-2 relative z-10">Informasi Rekening</h2>
              <p className="text-muted mb-8 relative z-10">Silakan salin informasi di bawah ini untuk mengirimkan donasi Anda.</p>
              
              <div className="bg-surface-alt rounded-xl p-6 text-center border-2 border-dashed border-border mb-8 relative z-10">
                <div className="text-text leading-loose">
                  {formattedBankDetails}
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-4 mb-8 text-sm text-muted-foreground border border-primary/10 relative z-10">
                <strong>Catatan Transparansi:</strong> Marungga Foundation berkomitmen untuk menyalurkan 100% donasi publik langsung ke program-program sasaran kami. Laporan tahunan dipublikasikan secara terbuka.
              </div>

              <Button as={Link} target="_blank" rel="noopener noreferrer" href="https://wa.me/6281236933550?text=Halo%20Yayasan%20Masyarakat%20Tangguh,%20saya%20ingin%20mengkonfirmasi%20donasi%20saya." variant="primary" className="w-full text-center flex items-center justify-center gap-2 group relative z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                Konfirmasi Donasi <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-4 relative z-10">Setelah transfer, silakan konfirmasi via WhatsApp ke 0812-3693-3550.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
