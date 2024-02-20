import { OKRDetailContentItem } from './type';

export const yearItem: { [key: string]: OKRDetailContentItem[] } = {
  '0': [
    {
      type: 'WORK',
      list: [{ title: 'WEB-LIB' }],
    },
    {
      type: 'CAREER',
      list: [{ title: '完成阅读浏览器工作原理与实践' },{title:'多语言支持'}],
    },
    {
      type: 'PERSONAL',
      list: [{ title: 'fitness goal:44kg' }],
    },
  ],
  '1': [
    {
      type: 'WORK',
      list: [],
    },
    {
      type: 'CAREER',
      list: [],
    },
    {
      type: 'PERSONAL',
      list: [],
    },
  ],
  '2': [
    {
      type: 'WORK',
      list: [],
    },
    {
      type: 'CAREER',
      list: [],
    },
    {
      type: 'PERSONAL',
      list: [],
    },
  ],
  '3': [
    {
      type: 'WORK',
      list: [],
    },
    {
      type: 'CAREER',
      list: [],
    },
    {
      type: 'PERSONAL',
      list: [],
    },
  ],
};

export const yearOKRItems = new Array(4).fill(null).map((_, index) => {
  return { key: String(index), label: `Q${index + 1}` };
});
