import React from 'react'
import logo from '../assets/img/betty_ecker_logo.svg'


const Nav = props => {
  const { pathname } = props

  const projectsClassName = pathname.match(/^\/work/) ? 'active' : ''
  const aboutClassName = pathname === '/about' ? 'active' : ''

  
  return (
    <div className="nav-wrapper">
   <nav>
      <span className="logo">
      <a href="/"><img id="logo" src={logo}/>
        </a>
      </span>
      <li>
        <ul>
          <a href="/#anchor" className={projectsClassName}>
            Projects
          </a>
        </ul>
        <ul>
          <a href="/about" className={aboutClassName}>
            About
          </a>
        </ul>
      </li>
    </nav>
    </div>
  )
}

export default Nav
