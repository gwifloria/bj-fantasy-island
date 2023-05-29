import { Row, Col } from "antd"

const PersonalCenter = () => {
  return (
    <div className="personalCenter__wrapper">
      <Row>
        <Col span={6} offset={0}>
          {/* avatar */}

        </Col>
        <Col span={12} offset={6}>
          col-6 col-offset-6

        </Col>
      </Row>
      <div className=""></div>
    </div>
  )
}
export default PersonalCenter
