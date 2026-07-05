import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Package, Users, Settings } from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  const cards = [
    { title: 'Programs Manager', desc: 'Manage foundation programs and activities', icon: Package, href: '/admin/programs', color: 'text-blue-500' },
    { title: 'Team Manager', desc: 'Manage team members and staff profiles', icon: Users, href: '/admin/team', color: 'text-green-500' },
    { title: 'Content Blocks', desc: 'Edit text and content across the website', icon: FileText, href: '/admin/content', color: 'text-orange-500' },
    { title: 'Site Settings', desc: 'Manage contact info and global settings', icon: Settings, href: '/admin/settings', color: 'text-gray-500' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-2">Welcome to the Marungga Foundation CMS.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <Link key={card.title} href={card.href} className="block group">
              <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader>
                  <Icon className={`w-8 h-8 mb-2 ${card.color}`} />
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{card.desc}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
