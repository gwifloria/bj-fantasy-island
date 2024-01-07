import { HeartOutlined } from '@ant-design/icons';
import { Card, Col, List, Row } from 'antd';
import { yearItem } from './config';

export const useTabItem = (activeKey: string) => {
  return (
    <Row gutter={16}>
      {yearItem[activeKey].map((item) => (
        <Col key={item.type} span={8}>
          <Card title={item.type} bordered={false}>
            <List
              itemLayout="horizontal"
              dataSource={item.list}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta avatar={<HeartOutlined />} title={item.title} description={item.description} />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};
