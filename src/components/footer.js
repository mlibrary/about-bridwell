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
            <div className="primary-logo"><a href="/" className="text-light mb-2"><img src="/assets/bridwell-press-logo-white.svg" alt="" height="30" width="auto" className="inline-block" /><span className="sr-only">Bridwell Press</span></a></div>
            <small className="d-block"><a className="text-light" href="https://www.smu.edu/libraries/scholarship/publishing/bridwell">Bridwell Press at SMU</a></small>
            <small className="d-block"><a className="text-light" href="/contact">Contact Us</a></small>
            <div className="logo">
              <a href="https://www.smu.edu/libraries"><img src="/assets/smu_library.png" alt="SMU library logo"/></a>
              <a href="https://www.smu.edu/perkins/"><img src="/assets/smu_perkins.png" alt="SMU Perkins School of Theology logo"/></a>
            </div>           
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled pt-4 float-right">
              <li className="mb-2"><Link to="/about" className="text-light">About</Link></li>
              <li className="mb-2"><a href="https://www.fulcrum.org/bridwell" className="text-light">Books</a></li>
              <li className="mb-2"><Link to="/authors" className="text-light">Publish With Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
          <small className="text-light d-block mb-3">© {year} · Bridwell Press is the professional publishing arm of Bridwell Library (SMU Libraries and Perkins School of Theology) in Dallas, Texas.</small>
          </div>
          <div className="col-md-2 text-right">
            <small className="text-white scala-sans">Powered by</small> <a href="https://fulcrum.org/"><img className="fulcrum" src="/assets/fulcrum-full-white.svg" alt="Fulcrum logo" height="20" width="auto" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
