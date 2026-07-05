-- Migration: Create Tables for Research Products and Partners
-- File: 0002_add_research_and_partners.sql

-- 1. Create marungga_research_products table
CREATE TABLE IF NOT EXISTS public.marungga_research_products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    cover_url TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add Row Level Security
ALTER TABLE public.marungga_research_products ENABLE ROW LEVEL SECURITY;

-- Policies for marungga_research_products
CREATE POLICY "Public profiles are viewable by everyone." 
ON public.marungga_research_products FOR SELECT 
USING (true);

CREATE POLICY "Users can insert research if authenticated." 
ON public.marungga_research_products FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Users can update research if authenticated." 
ON public.marungga_research_products FOR UPDATE 
USING (auth.role() = 'authenticated');

CREATE POLICY "Users can delete research if authenticated." 
ON public.marungga_research_products FOR DELETE 
USING (auth.role() = 'authenticated');


-- 2. Create marungga_partners table
CREATE TABLE IF NOT EXISTS public.marungga_partners (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    logo_url TEXT,
    website_url TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add Row Level Security
ALTER TABLE public.marungga_partners ENABLE ROW LEVEL SECURITY;

-- Policies for marungga_partners
CREATE POLICY "Public partners are viewable by everyone." 
ON public.marungga_partners FOR SELECT 
USING (true);

CREATE POLICY "Users can insert partners if authenticated." 
ON public.marungga_partners FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Users can update partners if authenticated." 
ON public.marungga_partners FOR UPDATE 
USING (auth.role() = 'authenticated');

CREATE POLICY "Users can delete partners if authenticated." 
ON public.marungga_partners FOR DELETE 
USING (auth.role() = 'authenticated');
