import { ReactNode } from "react"

const TimelineContainer = ({children}) => {
  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="circle"></div>
        <div className="line"></div>
      </div>
      {children}
    </div>
  )
}

export { TimelineContainer }