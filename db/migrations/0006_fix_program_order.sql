-- Perbaikan urutan program berdasarkan kronologi waktu program berjalan
-- Supaya program terbaru (contoh: PELITA PAUD) berada di paling atas.
-- Tabel marungga_programs diurutkan berdasarkan created_at DESC (paling baru ke paling lama).

UPDATE public.marungga_programs SET created_at = '2021-01-01 00:00:00' WHERE title ILIKE 'Respon Bencana Seroja%';
UPDATE public.marungga_programs SET created_at = '2021-02-01 00:00:00' WHERE title ILIKE 'Pelatihan Menulis Kreatif%';
UPDATE public.marungga_programs SET created_at = '2021-03-01 00:00:00' WHERE title ILIKE 'Proyek BISA (Nutrisi)%';
UPDATE public.marungga_programs SET created_at = '2021-04-01 00:00:00' WHERE title ILIKE 'Proyek Lii Marapu%';
UPDATE public.marungga_programs SET created_at = '2022-01-01 00:00:00' WHERE title ILIKE 'Dukungan Lii Marapu%';
UPDATE public.marungga_programs SET created_at = '2022-10-01 00:00:00' WHERE title ILIKE 'Ketahanan Pangan & Ternak%';
UPDATE public.marungga_programs SET created_at = '2023-09-01 00:00:00' WHERE title ILIKE 'Supportive Supervision BISA%';
UPDATE public.marungga_programs SET created_at = '2023-10-01 00:00:00' WHERE title ILIKE 'Training VAS Supply Chain%';
UPDATE public.marungga_programs SET created_at = '2023-11-01 00:00:00' WHERE title ILIKE 'Dokumentasi Karya Para Maestro%';
UPDATE public.marungga_programs SET created_at = '2024-09-01 00:00:00' WHERE title ILIKE 'Kurikulum Operasional PAUD%';
UPDATE public.marungga_programs SET created_at = '2025-01-01 00:00:00' WHERE title ILIKE 'Innovation Lab 2025%';
UPDATE public.marungga_programs SET created_at = '2026-04-01 00:00:00' WHERE title ILIKE 'PELITA PAUD%';
