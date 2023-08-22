import { PersonalIntroduction } from "@/components/PersonalIntroduction"
import { PhotoCarousel } from "@/components/PhotoCarousel"
import './index.scss'
import { useThemeToken } from "@/hooks/useThemeToken"
const Main = () => {
  const { token } = useThemeToken()
  return (
    <div style={{background:token.colorPrimary}} className="main-page--container">
      {/* avatar */}
      <PersonalIntroduction></PersonalIntroduction>
      <PhotoCarousel />
    </div>
  )
}
export default Main
