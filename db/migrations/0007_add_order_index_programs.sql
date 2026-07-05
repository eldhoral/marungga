-- Menambahkan kolom order_index ke tabel marungga_programs
ALTER TABLE public.marungga_programs 
ADD COLUMN IF NOT EXISTS order_index INTEGER DEFAULT 0;
