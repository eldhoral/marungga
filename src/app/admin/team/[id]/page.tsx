import { createClient } from '@/utils/supabase/server'
import { TeamForm } from '../TeamForm'
import { notFound } from 'next/navigation'

export default async function EditTeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient()
  
  const { data: member, error } = await supabase
    .from('marungga_team_members')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !member) {
    notFound()
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Edit Team Member</h1>
        <p className="text-gray-500 mt-2">Update information for this team member.</p>
      </div>
      
      <TeamForm member={member} />
    </div>
  )
}
