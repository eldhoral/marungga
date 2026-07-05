-- Create programs table
CREATE TABLE IF NOT EXISTS public.marungga_programs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    year VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(255),
    category VARCHAR(100),
    image_url VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create team_members table
CREATE TABLE IF NOT EXISTS public.marungga_team_members (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    department VARCHAR(255),
    image_url VARCHAR(255),
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create content_blocks table
CREATE TABLE IF NOT EXISTS public.marungga_content_blocks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    page VARCHAR(100) NOT NULL,
    section_key VARCHAR(100) NOT NULL,
    content_text TEXT NOT NULL,
    content_type VARCHAR(50) DEFAULT 'text', -- 'text', 'html', 'richtext'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(page, section_key)
);

-- Create site_settings table
CREATE TABLE IF NOT EXISTS public.marungga_site_settings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    key VARCHAR(100) NOT NULL UNIQUE,
    value TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS (Row Level Security)
ALTER TABLE public.marungga_programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.marungga_team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.marungga_content_blocks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.marungga_site_settings ENABLE ROW LEVEL SECURITY;

-- Allow public read access to all tables
CREATE POLICY "Allow public read access on programs" ON public.marungga_programs FOR SELECT USING (true);
CREATE POLICY "Allow public read access on team_members" ON public.marungga_team_members FOR SELECT USING (true);
CREATE POLICY "Allow public read access on content_blocks" ON public.marungga_content_blocks FOR SELECT USING (true);
CREATE POLICY "Allow public read access on site_settings" ON public.marungga_site_settings FOR SELECT USING (true);

-- Allow authenticated users to perform all actions
CREATE POLICY "Allow authenticated full access on programs" ON public.marungga_programs FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated full access on team_members" ON public.marungga_team_members FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated full access on content_blocks" ON public.marungga_content_blocks FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated full access on site_settings" ON public.marungga_site_settings FOR ALL USING (auth.role() = 'authenticated');

-- Setup Storage Bucket for Media
INSERT INTO storage.buckets (id, name, public) 
VALUES ('media', 'media', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access to media bucket
CREATE POLICY "Public Access" 
ON storage.objects FOR SELECT 
USING ( bucket_id = 'media' );

-- Allow authenticated upload to media bucket
CREATE POLICY "Authenticated Upload" 
ON storage.objects FOR INSERT 
WITH CHECK ( bucket_id = 'media' AND auth.role() = 'authenticated' );

-- Allow authenticated update to media bucket
CREATE POLICY "Authenticated Update" 
ON storage.objects FOR UPDATE 
USING ( bucket_id = 'media' AND auth.role() = 'authenticated' );

-- Allow authenticated delete to media bucket
CREATE POLICY "Authenticated Delete" 
ON storage.objects FOR DELETE 
USING ( bucket_id = 'media' AND auth.role() = 'authenticated' );
