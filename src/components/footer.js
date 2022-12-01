import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

export const titleQuery = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
}
`

const Footer = () => {
    const data = useStaticQuery(titleQuery)
    const {title} = data.site.siteMetadata
    const now = new Date()
    const year = now.getFullYear()

    return (
    <footer className="footer text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <a href="/" className="text-light mb-2 scala-sans"><img src="/assets/bridwell-press-logo-white.svg" alt="" height="100" width="auto" className="block" /><span className="sr-only">Bridwell Press</span></a>
            <small className="text-light d-block">Dallas, TX</small>
            <small className="d-block"><a className="text-light" href="/contact">Contact Us</a></small>            
          </div>
          
          <div className="col-md-3">
            <div className="footer-head abril">Peer Review</div>
            <ul className="list-unstyled text-small">
              <li><a href="/peerreview" className="text-light">Our Commitments and Guidelines</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
          <small className="text-light d-block mb-3">© {year} · Bridwell Press is the professional publishing arm of Bridwell Library (SMU Libraries and Perkins School of Theology) in Dallas, Texas. · <a className="text-light" href="https://fulcrum.org/accessibility/">Accessibility</a> · <a className="text-light" href="https://fulcrum.org/preservation">Preservation</a></small>
          </div>
          <div className="col-md-6 text-right">
            <small className="text-white scala-sans">Powered by</small> <a href="https://fulcrum.org/"><img className="fulcrum" src="/assets/fulcrum-full-white.svg" alt="Fulcrum logo" height="20" width="auto" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
