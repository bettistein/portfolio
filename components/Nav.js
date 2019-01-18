import React from 'react'

const Nav = props => {
  return (
    <nav>
      <span className="logo">
        <a href="/">Betty Stein</a>
      </span>
      <li>
        <ul>
          <a href="/"> Projects</a>
        </ul>
        <ul>
          <a href="../about"> About</a>
        </ul>
      </li>
    </nav>
  )
}

export default Nav
