import { createClient } from '@/utils/supabase/server'
import { ResearchForm } from '../ResearchForm'
import { notFound } from 'next/navigation'

export default async function EditResearchMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient()
  
  const { data: product, error } = await supabase
    .from('marungga_research_products')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !product) {
    notFound()
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Edit Research Product</h1>
        <p className="text-gray-500 mt-2">Update information for this research product.</p>
      </div>
      
      <ResearchForm product={product} />
    </div>
  )
}
