import Button from "@/components/Button";
import "./page.css";

export default function Contact() {
  return (
    <div className="contact-page animate-fade-in relative">
      <div className="blob blob-primary" style={{ top: '20%', left: '-10%', width: '600px', height: '600px', opacity: 0.2 }}></div>
      <div className="blob blob-accent" style={{ bottom: '10%', right: '-5%', width: '500px', height: '500px', opacity: 0.2, animationDelay: '3s' }}></div>

      <section className="contact-header text-center">
        <div className="container relative z-10">
          <div className="organic-panel inline-block p-xl rounded-xl">
            <h1 className="text-5xl font-jakarta font-bold text-primary-dark mb-md">Hubungi Kami</h1>
            <p className="max-w-2xl mx-auto text-muted text-xl">
              Kami terbuka untuk berkolaborasi, berdiskusi, dan bergerak bersama. Silakan hubungi kami melalui informasi di bawah ini.
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
                  <div className="contact-icon">📍</div>
                  <div>
                    <strong className="block text-primary-dark mb-xs">Alamat Utama</strong>
                    <p className="text-muted">Kota Kupang, Nusa Tenggara Timur, Indonesia</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">👤</div>
                  <div>
                    <strong className="block text-primary-dark mb-xs">Kontak Person</strong>
                    <p className="text-muted">Desintawati Futboe</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <strong className="block text-primary-dark mb-xs">Telepon / WhatsApp</strong>
                    <p className="text-muted">0812 3693 3550</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <strong className="block text-primary-dark mb-xs">Email Resmi</strong>
                    <p className="text-muted">marunggafoundation@gmail.com</p>
                    <p className="text-muted">desintawati27.ftb@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Decorative Map Placeholder */}
              <div className="organic-panel map-placeholder flex-center text-center">
                <div className="map-content">
                  <span className="text-5xl block mb-sm">🗺️</span>
                  <p className="font-bold text-primary-dark text-lg">Pusat Operasional<br/>Kupang, NTT</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="organic-panel form-card h-full">
                <h2 className="text-3xl font-jakarta font-bold text-primary-dark mb-sm">Kirim Pesan</h2>
                <p className="text-muted mb-lg">Punya ide kolaborasi atau sekadar ingin menyapa? Tinggalkan pesan di bawah ini.</p>
                
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
                      Kirim Pesan Sekarang 🚀
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
