import { Tabs } from 'antd';
import { useState } from 'react';
import { yearOKRItems } from './config';
import { useTabItem } from './useTabItems';

export const PersonalOKR = () => {
  const [activeKey, setActiveKey] = useState('0');
  const onChange = (key: string) => {
    setActiveKey(key);
  };

  const content = useTabItem(activeKey)

  return (
    <div>
      Here&apos;s my personal 2024 OKR. This will be divided into 4 seasons Each part includes personal tech skills,
      fitness goals and some other goals.
      <Tabs
        onChange={onChange}
        type="card"
        size="large"
        destroyInactiveTabPane
        activeKey={activeKey}
        items={yearOKRItems.map((item) => {
          return {
            label: item.label,
            key: String(item.key),
            children: content 
          };
        })}
      />
    </div>
  );
};
