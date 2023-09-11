import { WorkHistoryProps } from "./type"

export const WorkHistory = (props: WorkHistoryProps) => {
  const { companyName, responsibilities } = props

  return (<div className="work-history">
    <div className="company-name">{companyName}</div>
    <div className="responsibilities">
      {
        responsibilities.map((res, i) => <div key={i}>{res}</div>)
      }
    </div>
  </div>)
}
