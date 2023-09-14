import SplittingTitle from "@/components/SplittingTitle"
import { ProjectExperience } from "./ProjectExperience"
import { WorkHistory } from "./WorkHistory"
import { projectExperienceList, workHistoryList } from "./constants"
import './index.scss'

const Resume = () => {
  return (
    <div className="resume">
      {/* work history */}
      <div className="work-history--container">
        <SplittingTitle>
          <h1>Work History
          </h1>
        </SplittingTitle>
        {workHistoryList?.map((item, index) => <WorkHistory key={index} {...item}></WorkHistory>)}
      </div>

      {/* project experience */}
      <div className="project-experience--container">
        <SplittingTitle>
          <h1>Project Experience</h1>
        </SplittingTitle>
        {projectExperienceList?.map((item, index) => <ProjectExperience key={index} {...item}></ProjectExperience>)}
      </div>

      {/* personal summary */}
      <div className="personal-summary--container"></div>
    </div>
  )
}
export default Resume
