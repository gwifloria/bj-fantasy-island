import { Image } from 'antd';
interface IProps {
  items: string[]
}
export const Album = (props: IProps) => {

  const { items } = props
  return <Image.PreviewGroup
    items={items}
  >
    <Image
      width={200}
      src={items?.[0]}
    />
  </Image.PreviewGroup>
}
