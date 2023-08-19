import { Album } from "./Album"
import { albumsConfig } from "./config"

const PhotoWall = () => {
  return (
    <div className="photo-wall__container">
      {
        albumsConfig?.map((album) => <Album key={album.key} items={album.items}></Album>)
      }

    </div>
  )
}
export default PhotoWall
