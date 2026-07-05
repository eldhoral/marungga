import { createClient } from '@/utils/supabase/server'
import { PartnerForm } from '../PartnerForm'
import { notFound } from 'next/navigation'

export default async function EditPartnerMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient()
  
  const { data: partner, error } = await supabase
    .from('marungga_partners')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !partner) {
    notFound()
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Edit Partner</h1>
        <p className="text-gray-500 mt-2">Update information for this partner.</p>
      </div>
      
      <PartnerForm partner={partner} />
    </div>
  )
}
