import { Carousel, Image } from "antd"
import { albumsConfig } from "../../pages/PhotoWall/config"

export const PhotoCarousel = () => (<div className="photo-carousel__container">
  <Carousel>
    {albumsConfig[1].items?.map((i, index) => <div key={index}> <Image src={i}></Image></div>)}
  </Carousel>
</div>)
