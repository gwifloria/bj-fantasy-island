import { PersonalIntroduction } from "@/components/PersonalIntroduction"
import { PhotoCarousel } from "@/components/PhotoCarousel"
import './index.scss'
const Main = () => {
  return (
    <div className="main-page--container">
      {/* avatar */}
      <PersonalIntroduction></PersonalIntroduction>
      <div className="carousel">
      <PhotoCarousel />
      </div>
     
    </div>
  )
}
export default Main
