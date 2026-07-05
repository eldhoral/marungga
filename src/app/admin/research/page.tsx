import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Plus, Edit, Trash2 } from 'lucide-react'
import { deleteResearchProduct } from './actions'

export const dynamic = 'force-dynamic'

export default async function ResearchManager() {
  const supabase = await createClient()
  
  const { data: research, error } = await supabase
    .from('marungga_research_products')
    .select('*')
    .order('order_index', { ascending: true })
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Research Manager</h1>
          <p className="text-gray-500 mt-2">Manage the research products displayed on the homepage.</p>
        </div>
        <Link href="/admin/research/new">
          <Button className="flex items-center gap-2">
            <Plus size={16} /> Add Product
          </Button>
        </Link>
      </div>

      {error ? (
        <div className="p-4 bg-red-50 text-red-600 rounded-md">Error loading research: {error.message}</div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>All Research Products</CardTitle>
          </CardHeader>
          <CardContent>
            {research && research.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Cover URL</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {research.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="text-gray-500">{product.order_index}</TableCell>
                      <TableCell className="font-medium">{product.title}</TableCell>
                      <TableCell>{product.cover_url ? 'Uploaded' : '-'}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Link href={`/admin/research/${product.id}`}>
                            <Button variant="outline" size="sm" className="flex items-center gap-1">
                              <Edit size={14} /> Edit
                            </Button>
                          </Link>
                          <form action={async () => {
                            'use server'
                            await deleteResearchProduct(product.id)
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
                No research products found. Click "Add Product" to create one.
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
