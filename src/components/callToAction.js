import React from "react"
import {Link} from "gatsby"

const CallToAction = ({callToAction}) => {
  return (
    <div className="calltoaction-wrapper">      
      <p>{callToAction.description}</p>
      {
        callToAction.buttonUrl.startsWith("/")
        ? <Link className="btn btn-primary" to={callToAction.buttonUrl}>{callToAction.buttonLabel}</Link>
        : <a className="btn btn-primary" href={callToAction.buttonUrl}>{callToAction.buttonLabel}</a>
      }      
    </div>
  )
}

export default CallToAction