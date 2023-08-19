import { Album } from "./Album"
import { PhotoCarousel } from "../../components/PhotoCarousel"
import { albumsConfig } from "./config"

const PhotoWall = () => {
  return (
    <div className="photo-wall__container">
      {
        albumsConfig?.map((album) => <Album key={album.key} items={album.items}></Album>)
      }
      <PhotoCarousel></PhotoCarousel>
    </div>
  )
}
export default PhotoWall
