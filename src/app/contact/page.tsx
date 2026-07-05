import Button from "@/components/Button";
import { createClient } from "@/utils/supabase/server";
import "./page.css";

export const revalidate = 60;

export default async function Contact() {
  const supabase = await createClient();
  
  // Fetch contact page content
  const { data: contentData } = await supabase
    .from('marungga_content_blocks')
    .select('section_key, content_text')
    .eq('page', 'contact');

  const content: Record<string, string> = {};
  contentData?.forEach(item => {
    content[item.section_key] = item.content_text;
  });

  // Default content fallbacks
  const heroTitle = content['hero_title'] || 'Hubungi Kami';
  const heroDescription = content['hero_description'] || 'Kami terbuka untuk berkolaborasi, berdiskusi, dan bergerak bersama. Silakan hubungi kami melalui informasi di bawah ini.';
  const formTitle = content['form_title'] || 'Kirim Pesan';
  const formDescription = content['form_description'] || 'Punya ide kolaborasi atau sekadar ingin menyapa? Tinggalkan pesan di bawah ini.';

  return (
    <div className="contact-page animate-fade-in relative">
      <div className="blob blob-primary" style={{ top: '20%', left: '-10%', width: '600px', height: '600px', opacity: 0.2 }}></div>
      <div className="blob blob-accent" style={{ bottom: '10%', right: '-5%', width: '500px', height: '500px', opacity: 0.2, animationDelay: '3s' }}></div>

      <section className="contact-header text-center">
        <div className="container relative z-10">
          <div className="organic-panel inline-block p-xl rounded-xl">
            <h1 className="text-5xl font-jakarta font-bold text-primary-dark mb-md" dangerouslySetInnerHTML={{ __html: heroTitle }}></h1>
            <p className="max-w-2xl mx-auto text-muted text-xl" dangerouslySetInnerHTML={{ __html: heroDescription }}>
            </p>
          </div>
        </div>
      </section>

      <section className="section relative z-10">
        <div className="container">
          <div className="grid contact-grid gap-xl max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <div className="contact-info-wrapper flex flex-col gap-lg">
              
              <div className="organic-panel contact-card">
                <h2 className="text-2xl font-jakarta font-bold text-primary-dark mb-md">Informasi Kontak</h2>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <strong className="block text-primary-dark mb-xs">Alamat Utama</strong>
                    <p className="text-muted">Kota Kupang, Nusa Tenggara Timur, Indonesia</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </div>
                  <div>
                    <strong className="block text-primary-dark mb-xs">Kontak Person</strong>
                    <p className="text-muted">Desintawati Futboe</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <strong className="block text-primary-dark mb-xs">Telepon / WhatsApp</strong>
                    <p className="text-muted">0812 3693 3550</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <strong className="block text-primary-dark mb-xs">Email Resmi</strong>
                    <p className="text-muted">marunggafoundation@gmail.com</p>
                    <p className="text-muted">desintawati27.ftb@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="map-container">
                <iframe
                  title="Lokasi Marungga Foundation - Kupang, NTT"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123747.37274440658!2d123.5077018!3d-10.1771998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c5681af08dd052d%3A0x6b6e7e3e5e66a241!2sKupang%2C%20Kota%20Kupang%2C%20Nusa%20Tenggara%20Tim.!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="280"
                  style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="organic-panel form-card h-full">
                <h2 className="text-3xl font-jakarta font-bold text-primary-dark mb-sm" dangerouslySetInnerHTML={{ __html: formTitle }}></h2>
                <div className="text-muted mb-lg" dangerouslySetInnerHTML={{ __html: formDescription }}></div>
                
                <form className="contact-form flex flex-col gap-md">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Nama Lengkap</label>
                      <input type="text" id="name" name="name" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" name="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subjek</label>
                    <input type="text" id="subject" name="subject" placeholder="Subjek kolaborasi / pertanyaan" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Pesan Anda</label>
                    <textarea id="message" name="message" rows={6} placeholder="Ceritakan lebih detail tentang pesan Anda..." required></textarea>
                  </div>
                  
                  <div className="mt-sm text-right">
                    <Button type="submit" variant="primary" className="w-full sm-w-auto justify-center">
                      Kirim Pesan Sekarang
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
