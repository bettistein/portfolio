import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem`}}>
    <Link to={props.to} style={{color: `#161c27`, textDecoration: `none`}}>
      {props.children}
    </Link>
  </li>

// Global Stlye:
export default ({ children }) => (
  <div style=
  {{ margin: `0 auto`,
    backgroundColor: `#b0d6d5`,
    color: `#161c27`,

}}>

    <header style={{
      marginBottom: `1.5rem`,
      position: `fixed`,
      color: `#161c27`,
      marginTop: 20,

    }}>

      <Link to="/"
      style={{
        boxShadow: 'none',
        textDecoration: 'none',
        color: 'inherit',
        margin: 12,


      }}>

        <h2 style={{
          display: `inline`,
        }}>B
        </h2>
      </Link>

      <ul style={{
        display: `inline`,
        right: 20,
        position: `fixed`,
      }}>

        <ListLink to="/about/"
        style={{
          boxShadow: `none`,
        }}>
        About</ListLink>
      </ul>
    </header>
    {children()}
  </div>
);
