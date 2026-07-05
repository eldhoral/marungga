-- Seed About Page Content Blocks
INSERT INTO public.marungga_content_blocks (page, section_key, content_text) VALUES 
('about', 'hero_title', 'Tentang Kami'),
('about', 'hero_description', 'Kenali Kami Lebih Dekat. Jejak langkah dan visi misi Yayasan Masyarakat Tangguh Sejahtera (Marungga Foundation) di kawasan Timur Indonesia.'),
('about', 'about_who', '<p>Yayasan Masyarakat Tangguh Sejahtera (Marungga Foundation) didirikan pada Februari 2019, merupakan Organisasi berbasis Masyarakat yang lahir atas kemauan dan kesadaran sekelompok orang masyarakat yang terorganisir dan peduli terhadap isu-isu kemanusiaan di Indonesia, khususnya Wilayah Timur Indonesia.</p>'),
('about', 'about_background', '<p>Yayasan ini berkedudukan di Kota Kupang, Nusa Tenggara Timur. Marungga Foundation memiliki 14 anggota yang mempunyai pengalaman kerja di bidang pengembangan masyarakat adat, pengembangan anak, kesetaraan gender, advokasi, perlindungan anak, kesehatan, pengurangan risiko bencana dan inklusi. Marungga Foundation telah terdaftar sebagai sebuah Yayasan berbadan hukum melalui akta notaris no 8 tanggal 29 Juni 2020 oleh Yarek A. B Pakh, S.H., M.Kn. (Notaris dan PPAT).</p>'),
('about', 'about_vision', '<p>Mewujudkan Masyarakat wilayah timur Indonesia yang tangguh dan sejahtera berlandaskan perilaku kritis, adaptif dan tanggap terhadap berbagai perubahan dengan mengarusutamakan nilai-nilai budaya lokal yang bermanfaat, inklusif, perlindungan anak, kesetaraan gender, perlindungan terhadap perempuan, dan nilai keberagaman dengan penguatan pilar-pilar sumber daya di bidang pendidikan, kesehatan, ekonomi, penanggulangan bencana dan perubahan iklim yang partisipatif, berkualitas dan berbasis penelitian.</p>'),
('about', 'about_mission_1', 'Meningkatkan kapasitas dan mencetak agen perubahan dari kelompok anak, kelompok anak muda, dan kelompok perempuan dalam bidang-bidang dan isu pengarusutamaan'),
('about', 'about_mission_2', 'Mempromosikan informasi berbasis data dan penelitian terkait isu-isu pengarusutamaan sebagai kontribusi dalam membangun Masyarakat yang Tangguh dan Sejahtera'),
('about', 'about_mission_3', 'Melakukan advokasi berbasis data dan penelitian dan membangun jejaring yang bersinggungan'),
('about', 'about_mission_4', 'Melaksanakan program-program yang berkualitas, berbasis partisipasi masyarakat dan penelitian aksi dalam bidang-bidang dan isu pengarusutamaan')
ON CONFLICT (page, section_key) 
DO UPDATE SET content_text = EXCLUDED.content_text;

DELETE FROM public.marungga_team_members;

INSERT INTO public.marungga_team_members (name, role, department, order_index, image_url) VALUES 
-- Pembina
('Rika Setiawati', 'Pembina', NULL, 10, NULL),
('Yufni Mole Nggebu', 'Pembina', NULL, 20, NULL),

-- Pengawas
('Dianika Wira Atmaja', 'Pengawas', NULL, 30, NULL),
('Yublinance Dael', 'Pengawas', NULL, 40, NULL),

-- Pengurus Inti
('Desinta W Futboe', 'Ketua Pengurus', NULL, 50, NULL),
('Nicodemus Seran', 'Sekertaris Umum', NULL, 60, NULL),
('Juliana Lawa', 'Bendahara Umum', NULL, 70, NULL),

-- Bidang Riset dan Dokumentasi
('Joseph Lamont', 'Anggota Bidang', 'Riset dan Dokumentasi', 80, NULL),
('Wustari L. Mangundjaya', 'Anggota Bidang', 'Riset dan Dokumentasi', 82, NULL),
('Reftalina Rachman', 'Anggota Bidang', 'Riset dan Dokumentasi', 84, NULL),
('Faisal Magrie', 'Anggota Bidang', 'Riset dan Dokumentasi', 86, NULL),

-- Bidang Program dan Pengembangan
('S. Fridwan Pellokila', 'Anggota Bidang', 'Program dan Pengembangan', 90, NULL),
('Meilinda Fanni Oktaviani', 'Anggota Bidang', 'Program dan Pengembangan', 100, NULL),

-- Bidang Keuangan dan Administrasi
('Ferdinan Duka', 'Anggota Bidang', 'Keuangan dan Administrasi', 110, NULL);
