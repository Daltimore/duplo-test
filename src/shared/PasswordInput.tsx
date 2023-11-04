import React from 'react'
import { Form, Input } from 'antd'
import { TextInputModel } from '../models/Input.class'

const TextInput: React.FC<TextInputModel> = ({ name, placeholder }: any) => {
  return (
    <Form.Item
      name={name}
      className="w-full"
      rules={[
        {
          required: true,
          message: 'This field is required',
        },
      ]}
    >
      <Input.Password placeholder={placeholder} className="text-input rounded-none focus:!outline-none" />
    </Form.Item>
  )
}

export default TextInput