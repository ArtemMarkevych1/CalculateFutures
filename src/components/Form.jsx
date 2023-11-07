import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, Input, Button } from 'antd'

export default function CalculateForm() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    // handle form submission
  }

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Form.Item name="input1">
        <Input placeholder="Input 1" ref={register} />
      </Form.Item>
      <Form.Item name="input2">
        <Input placeholder="Input 2" ref={register} />
      </Form.Item>
      <Form.Item name="input3">
        <Input placeholder="Input 3" ref={register} />
      </Form.Item>
      <Form.Item name="input4">
        <Input placeholder="Input 4" ref={register} />
      </Form.Item>
      <Form.Item name="input5">
        <Input placeholder="Input 5" ref={register} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
        <Button type="default" htmlType="reset">Reset</Button>
      </Form.Item>
    </Form>
  )
}