import React from 'react'

const Nav = props => {
  const { pathname } = props

  const projectsClassName = pathname.match(/^\/work/) ? 'active' : ''
  const aboutClassName = pathname === '/about' ? 'active' : ''

  
  return (
    <nav>
      <span className="logo">
        <a href="/">Betty Stein</a>
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
  )
}

export default Nav
