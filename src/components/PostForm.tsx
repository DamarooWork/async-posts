import React, { ChangeEvent } from 'react'
import { Button, Form, Input } from 'antd'
import { connect } from 'react-redux'
import { createPost } from '../redux/actions'

class PostForm extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props)
    this.state = {
      title: '',
    }
  }
  submitHandler = (e: SubmitEvent) => {
    e.preventDefault

    const { title } = this.state
    const newPost = {
      title,
      id: +Date.now().toString(),
    }
   
    this.props.createPost(newPost)
    this.setState({ title: '' })

    console.log(newPost)
  }
  changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist()
    this.setState((prev) => ({
      ...prev,
      ...{
        [e.target.name]: e.target.value,
      },
    }))
  }
  render() {
    return (
      <Form onFinish={this.submitHandler} layout="vertical">
        <Form.Item
          name="Заголовок поста"
          label="Заголовок поста"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <Input
            name="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Создать
        </Button>
      </Form>
    )
  }
}

const mapDispatchToProps = {
  createPost,
}

export default connect(null, mapDispatchToProps)(PostForm)
