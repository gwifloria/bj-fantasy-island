import { Card, Col, Row } from "antd"
import { UpdateTodo } from "./components/UpdateTodo"
import { todoItems } from "./config"

export const Todos = () => {
  return <>
    <UpdateTodo></UpdateTodo>
    <Row gutter={16}>
      {
        todoItems?.map((i) => <Col key={i.title} span={8}>
          <Card title={i.title} bordered={false}>
            {i.content}
          </Card>
        </Col>)
      }
    </Row></>
}
