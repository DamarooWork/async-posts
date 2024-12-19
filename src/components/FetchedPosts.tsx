import { Button } from 'antd'
import Post from './Post'

export default function FetchedPosts({ posts }: IPosts) {
  if (!posts.length) {
    return (
      <Button type="primary" className="">
        Загрузить
      </Button>
    )
  }
  return (
    <>
      {posts.map((post: IPost) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}
