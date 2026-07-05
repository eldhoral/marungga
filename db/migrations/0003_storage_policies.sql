-- Add Storage Policies for marungga-public bucket
-- File: 0003_storage_policies.sql

-- Ensure bucket exists (just in case)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('marungga-public', 'marungga-public', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access to marungga-public bucket
CREATE POLICY "Public Access marungga-public" 
ON storage.objects FOR SELECT 
USING ( bucket_id = 'marungga-public' );

-- Allow authenticated upload to marungga-public bucket
CREATE POLICY "Authenticated Upload marungga-public" 
ON storage.objects FOR INSERT 
WITH CHECK ( bucket_id = 'marungga-public' AND auth.role() = 'authenticated' );

-- Allow authenticated update to marungga-public bucket
CREATE POLICY "Authenticated Update marungga-public" 
ON storage.objects FOR UPDATE 
USING ( bucket_id = 'marungga-public' AND auth.role() = 'authenticated' );

-- Allow authenticated delete to marungga-public bucket
CREATE POLICY "Authenticated Delete marungga-public" 
ON storage.objects FOR DELETE 
USING ( bucket_id = 'marungga-public' AND auth.role() = 'authenticated' );
