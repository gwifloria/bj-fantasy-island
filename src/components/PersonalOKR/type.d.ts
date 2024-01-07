export type OKRType = 'WORK' | 'CAREER' | 'PERSONAL';

export interface OKRDetailContentItem {
  type: OKRType;
  list?: { title: string; description?: string; icon?: string }[];
}
