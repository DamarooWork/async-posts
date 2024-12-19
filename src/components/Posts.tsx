import Post from './Post'
import { connect } from 'react-redux'

const Posts = ({ syncPosts }: any) => {
  if (!syncPosts.length) {
    return <p className="text-2xl text-center">Постов пока нет</p>
  }
  return (
    <>
      {syncPosts.map((post: IPost) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}
const mapStateToProps = (state: any) => {
  return {
    syncPosts: state.posts.posts.posts,
  }
}
export default connect(mapStateToProps, null)(Posts)
