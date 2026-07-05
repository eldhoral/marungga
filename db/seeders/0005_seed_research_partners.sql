-- Seeder: Seed Research Products and Partners
-- File: 0005_seed_research_partners.sql

-- Clear existing data (optional, but good for idempotent seeding)
DELETE FROM public.marungga_research_products;
DELETE FROM public.marungga_partners;

-- 1. Seed Research Products
INSERT INTO public.marungga_research_products (title, order_index) VALUES
('Panduan Penyelenggaraan Sekolah Adat Marapu', 10),
('Buku Teks Pendamping Pendidikan Marapu Kelas X', 20),
('Buku Teks Pendamping Pendidikan Marapu Kelas XI', 30),
('Buku Teks Pendamping Pendidikan Marapu Kelas XII', 40),
('Buku Teks Pendamping Pendidik Kepercayaan & Kebudayaan Jingitiu', 50),
('Panduan Pengembangan Kurikulum Operasional PAUD', 60);

-- 2. Seed Partners
INSERT INTO public.marungga_partners (name, order_index) VALUES
('SID', 10),
('CHARIS', 20),
('TAWA SEMESTA', 30),
('IBU Foundation', 40),
('Nutrition International', 50),
('William & Lily', 60),
('YABN', 70),
('Adaro', 80),
('VOICE', 90),
('LPDP', 100),
('Dana Indonesiana', 110),
('Tut Wuri Handayani', 120),
('Pemkab Kupang', 130),
('Pemkab Sabu Raijua', 140),
('Pemkab Sumba Timur', 150);
