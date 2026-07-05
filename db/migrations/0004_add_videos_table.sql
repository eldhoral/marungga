-- Create marungga_videos table
CREATE TABLE IF NOT EXISTS public.marungga_videos (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    youtube_id VARCHAR(100) NOT NULL,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.marungga_videos ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access on videos" ON public.marungga_videos FOR SELECT USING (true);

-- Allow authenticated users to perform all actions
CREATE POLICY "Allow authenticated full access on videos" ON public.marungga_videos FOR ALL USING (auth.role() = 'authenticated');
