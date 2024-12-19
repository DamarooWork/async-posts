import FetchedPosts from './components/FetchedPosts'
import PostForm from './components/PostForm'
import Posts from './components/Posts'

export default function App() {
  return (
    <div className="container mx-auto py-4 pt-3">
      <div>
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="flex align-top  justify-between  gap-8">
        <div className="col w-1/2">
          <h2 className="text-3xl">Синхронные посты</h2>
          <Posts />
        </div>
        <div className="col w-1/2">
          <h2 className="text-3xl">Асинхронные посты</h2>
          <FetchedPosts posts={[]} />
        </div>
      </div>
    </div>
  )
}
