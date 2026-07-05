import { createClient } from '@/utils/supabase/server'
import { ProgramForm } from '../ProgramForm'
import { notFound } from 'next/navigation'

export default async function EditProgramPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  
  const { data: program, error } = await supabase
    .from('marungga_programs')
    .select('*')
    .eq('id', params.id)
    .single()

  if (error || !program) {
    notFound()
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Edit Program</h1>
        <p className="text-gray-500 mt-2">Update information for this program.</p>
      </div>
      
      <ProgramForm program={program} />
    </div>
  )
}
