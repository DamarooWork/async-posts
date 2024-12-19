import { Space, Card } from 'antd'

export default function Post({ post }: { post: IPost }) {
  return (
    <Space direction="vertical" size={16}>
      <Card
        title={`Post №${post.id}`}
        // extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        {post.title ? <h5>{post.title}</h5> : <h5>Нет названия</h5>}
      </Card>
    </Space>
  )
}
