import { projectExperienceList } from '@/pages/Resume/constants';
import { Carousel, List } from 'antd';
import React from 'react';
import './index.scss';

const data = projectExperienceList.map((project) => ({
  ...project,
  title: `${project.projectName}`,
  description: project.projectBackground,
  content: project.details,
}));

export const WorkExperience: React.FC = () => (
  <div className="work-experience--container">
    <List
      itemLayout="vertical"
      size="large"
      dataSource={data}
      footer={
        <div>
          <b></b>
        </div>
      }
      renderItem={(item) => (
        <List.Item
          key={item.title}
          extra={
            <Carousel autoplay>
              {item.pictures.map((i) => {
                return <img src={i} key={i}></img>;
              })}
            </Carousel>
          }
        >
          <List.Item.Meta title={item.title} description={item.description} />
        </List.Item>
      )}
    />
  </div>
);
