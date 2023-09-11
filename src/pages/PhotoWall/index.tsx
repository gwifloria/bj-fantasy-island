import { PhotoCarousel } from "../../components/PhotoCarousel"
import './index.scss'
const PhotoWall = () => {
  return (
    <div className="photo-wall__container">
      <div className="introduction">
        Photography Portfolio
      </div>
      <PhotoCarousel></PhotoCarousel>
    </div>
  )
}
export default PhotoWall
