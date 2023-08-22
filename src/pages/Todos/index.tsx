import { Row, Col, Card } from "antd"
import { todoItems } from "./config"

export const Todos = () => {
  return <Row gutter={16}>
    {
      todoItems?.map((i) => <Col key={i.title} span={8}>
        <Card title={i.title} bordered={false}>
          {i.content}
        </Card>
      </Col>)
    }

  </Row>
}
