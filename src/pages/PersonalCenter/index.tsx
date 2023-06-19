import { Row, Col } from "antd"
import { MyAvatar } from "./components/MyAvatar"

const PersonalCenter = () => {
  return (
    <div className="personalCenter__wrapper">
      <Row>
        <Col span={6} offset={0}>
          {/* avatar */}
          WHO AM I
        <MyAvatar /> 
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
