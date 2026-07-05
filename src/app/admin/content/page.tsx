import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Edit } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function ContentManager() {
  const supabase = await createClient()
  
  const { data: contentBlocks, error } = await supabase
    .from('marungga_content_blocks')
    .select('*')
    .order('page', { ascending: true })
    .order('section_key', { ascending: true })

  // Group content by page
  const groupedContent = contentBlocks?.reduce((acc: any, block) => {
    if (!acc[block.page]) {
      acc[block.page] = []
    }
    acc[block.page].push(block)
    return acc
  }, {}) || {}

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Content Manager</h1>
        <p className="text-gray-500 mt-2">Edit text blocks and wording across the website.</p>
      </div>

      {error ? (
        <div className="p-4 bg-red-50 text-red-600 rounded-md">Error loading content: {error.message}</div>
      ) : (
        <div className="space-y-8">
          {Object.keys(groupedContent).map((page) => (
            <Card key={page}>
              <CardHeader className="bg-gray-50 border-b">
                <CardTitle className="capitalize">{page} Page</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/4">Section Key</TableHead>
                      <TableHead>Preview</TableHead>
                      <TableHead className="text-right w-24">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {groupedContent[page].map((block: any) => (
                      <TableRow key={block.id}>
                        <TableCell className="font-medium text-gray-700">{block.section_key}</TableCell>
                        <TableCell>
                          <div className="truncate max-w-xl text-gray-500">
                            {block.content_type === 'richtext' || block.content_type === 'html' 
                              ? block.content_text.replace(/<[^>]+>/g, '').substring(0, 80) + '...'
                              : block.content_text.substring(0, 80) + (block.content_text.length > 80 ? '...' : '')
                            }
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Link href={`/admin/content/${block.id}`}>
                            <Button variant="outline" size="sm" className="flex items-center gap-1">
                              <Edit size={14} /> Edit
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ))}
          
          {Object.keys(groupedContent).length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No content blocks found. You need to seed the database with initial content.
            </div>
          )}
        </div>
      )}
    </div>
  )
}
