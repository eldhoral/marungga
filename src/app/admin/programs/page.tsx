import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Plus, Edit, Trash2 } from 'lucide-react'
import { deleteProgram } from './actions'

export const dynamic = 'force-dynamic'

export default async function ProgramsManager() {
  const supabase = await createClient()
  
  const { data: programs, error } = await supabase
    .from('marungga_programs')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Programs</h1>
          <p className="text-gray-500 mt-2">Manage the programs and activities of the foundation.</p>
        </div>
        <Link href="/admin/programs/new">
          <Button className="flex items-center gap-2">
            <Plus size={16} /> Add Program
          </Button>
        </Link>
      </div>

      {error ? (
        <div className="p-4 bg-red-50 text-red-600 rounded-md">Error loading programs: {error.message}</div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>All Programs</CardTitle>
          </CardHeader>
          <CardContent>
            {programs && programs.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Year</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {programs.map((program) => (
                    <TableRow key={program.id}>
                      <TableCell className="font-medium">{program.title}</TableCell>
                      <TableCell>{program.year}</TableCell>
                      <TableCell>{program.location || '-'}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Link href={`/admin/programs/${program.id}`}>
                            <Button variant="outline" size="sm" className="flex items-center gap-1">
                              <Edit size={14} /> Edit
                            </Button>
                          </Link>
                          <form action={async () => {
                            'use server'
                            await deleteProgram(program.id)
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
                No programs found. Click "Add Program" to create one.
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
