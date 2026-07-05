import { VideoForm } from '../VideoForm'

export default function NewVideoPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Add New Video</h1>
        <p className="text-gray-500 mt-2">Enter the YouTube link and title to add a new video.</p>
      </div>
      
      <VideoForm />
    </div>
  )
}
