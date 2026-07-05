import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Plus, Edit, Trash2 } from 'lucide-react'
import { deleteTeamMember } from './actions'

export const dynamic = 'force-dynamic'

export default async function TeamManager() {
  const supabase = await createClient()
  
  const { data: team, error } = await supabase
    .from('marungga_team_members')
    .select('*')
    .order('order_index', { ascending: true })
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Team Manager</h1>
          <p className="text-gray-500 mt-2">Manage the staff and team members displayed on the About page.</p>
        </div>
        <Link href="/admin/team/new">
          <Button className="flex items-center gap-2">
            <Plus size={16} /> Add Member
          </Button>
        </Link>
      </div>

      {error ? (
        <div className="p-4 bg-red-50 text-red-600 rounded-md">Error loading team: {error.message}</div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>All Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            {team && team.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {team.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell className="text-gray-500">{member.order_index}</TableCell>
                      <TableCell className="font-medium">{member.name}</TableCell>
                      <TableCell>{member.role}</TableCell>
                      <TableCell>{member.department || '-'}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Link href={`/admin/team/${member.id}`}>
                            <Button variant="outline" size="sm" className="flex items-center gap-1">
                              <Edit size={14} /> Edit
                            </Button>
                          </Link>
                          <form action={async () => {
                            'use server'
                            await deleteTeamMember(member.id)
                          }}>
                            <Button type="submit" variant="destructive" size="sm" className="flex items-center gap-1">
                              <Trash2 size={14} /> Delete
                            </Button>
                          </form>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No team members found. Click "Add Member" to create one.
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
