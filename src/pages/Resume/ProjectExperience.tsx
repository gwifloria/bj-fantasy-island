import { ProjectExperienceProps } from "./type"

export const ProjectExperience = (props: ProjectExperienceProps) => {
  const { projectBackground, details,projectName } = props
  return (
    <div className="project-experience">
      <div className="project-name">{projectName}</div>
      <div className="background">{projectBackground}</div>
      <div className="details">{
        details?.map((content, index) => <div key={index}>{content}</div>)}</div>
    </div>
  )
}
