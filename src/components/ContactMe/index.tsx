import { MailOutlined } from "@ant-design/icons";
import { Popover, message } from "antd";
import { useCopyToClipboard } from "react-use";
import './index.scss';

const email = 'ghuijue@gmail.com'

const ShakeSquare = () => {
  return (<div className="shake">
    contact me!</div>)
}
const Content = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [, copyToClipboard] = useCopyToClipboard();

  const handleClick = async () => {
    try {
      copyToClipboard(email);
      messageApi.success(`copied!`)
    } catch {
      console.log('oops');
    }
  }

  return (
    <p>
      {contextHolder}
      <MailOutlined />
      &nbsp;
      <span style={{ cursor: 'pointer' }} onClick={handleClick} className="mail">{email}</span>
    </p>
  );

}


export const ContactMe = () => {
  return (
    <Popover rootClassName="contact-popover" title="hi~"
      trigger={'click'} content={Content} >
      <>
        <ShakeSquare />
      </>
    </Popover>
  )
}
