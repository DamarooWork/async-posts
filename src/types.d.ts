interface IPosts {
  posts: IPost[]
}
interface IPost {
  id: number
  title: string
}
interface CounterState {
  posts: []
  fetchedPosts: []
}
interface MyProps {
  createPost: (post: IPost) => void
}
interface MyState {
  title: string
}
