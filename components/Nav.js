import React from 'react'
import { isAbsolute } from 'path'

const Nav = props => {
  return (
    <div className="nav">
      <span className="logo">
        <a href="/">Betty Stein</a>
      </span>
      <li>
        <ul>
          <a href="../about"> Projects</a>
        </ul>
        <ul>
          <a href="../about"> About</a>
        </ul>
      </li>
    </div>
  )
}

export default Nav
