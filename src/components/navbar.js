import React, {useState} from "react"
import {Link} from "gatsby"

const Navbar = () => {
  const [isOpen, setNav] = (useState(false))
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src="/assets/bridwell-press-logo-white.svg" alt="" height="70" width="auto" className="navbar-brand-logo" aria-labelledby="title"/> <h1 id="title" className="sr-only">Amherst College Press</h1>
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon" />
        </button>
        <div id="navbar" className={
          isOpen
            ? "collapse navbar-collapse flex-row show"
            : "collapse navbar-collapse flex-row-reverse"
          }
        >
          <ul className="navbar-nav float-right">
            <li className="nav-item">
              <Link to="/about" className="nav-link text-dark">
                About
              </Link>
            </li>
            <li>
              <a href="https://www.fulcrum.org/bridwell" className="nav-link text-dark">
                Books
              </a>
            </li>
            <li>
              <Link to="/authors" className="nav-link text-dark">
                Publish With Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
