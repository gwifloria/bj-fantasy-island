import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";
import { useFormOperation } from "../hooks/useFormOperation";

export const UpdateTodo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { submit } = useFormOperation()
  const handleOk = () => {
    setIsModalOpen(false)

  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }


  return (<div>
    <Button type="primary" onClick={() => setIsModalOpen(true)}>Add To Do</Button>
    <Modal title="a new Todo" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
        name="wrap"
        labelCol={{ flex: '110px' }}
        labelAlign="left"
        labelWrap
        wrapperCol={{ flex: 1 }}
        colon={false}
        style={{ maxWidth: 600 }}
      >
        {/* <Form.Item label="type" name="type" rules={[{ required: true }]}>
          <Select  />
        </Form.Item> */}
        <Form.Item label="content" name="content" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label=" ">
          <Button onClick={submit} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  </div>)
}
