import { TeamForm } from '../TeamForm'

export default function NewTeamMemberPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Add Team Member</h1>
        <p className="text-gray-500 mt-2">Create a new team member profile.</p>
      </div>
      
      <TeamForm />
    </div>
  )
}
