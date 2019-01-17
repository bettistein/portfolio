import React from 'react'
import { workFrontMatters } from '../data'

const Header = props => {
  return (
    <div className="lpheader">
      <div className="nav-frontpage">
        <span className="logo">Betty Stein</span>
        <li>
          <ul>
            <a href="#anchor"> Projects</a>
          </ul>
          <ul>
            <a href="../about"> About</a>
          </ul>
        </li>
      </div>
      <div className="headercontent">
        <h1>
          Visual Designer, passionately crafting identities and user interfaces.
          Art Director. Cat lover.
        </h1>
        <p>Here goes some more text.</p>
      </div>
    </div>
  )
}

const Card = props => {
  const { thumbnail, sideinfo, href } = props
  return (
    <a href={href} className="card">
      <img src={thumbnail} />
      <p>
      <span> {sideinfo.client} </span>
      <span> {sideinfo.project} </span>
      </p>
    </a>
  )
}

const Footer = props => {
  return (
    <footer>
      <a href="/">Betty Stein</a>
      <li>
        <ul>
          <a href="#anchor"> Projects</a>
        </ul>
        <ul>
          <a href="../about"> About</a>
        </ul>
      </li>
    </footer>
  )
}

const Frontpage = () => {
  return (
    <div>
      <Header />
      <div id="anchor" className="content">
        {workFrontMatters.map((frontMatter, i) => {
          const { thumbnail, href, sideinfo } = frontMatter
          return (
            <Card key={i} thumbnail={thumbnail} href={href} sideinfo={sideinfo} />
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

Frontpage.meta = {
  title: 'Home',
  description: 'Portfolio of Bettina Steinbrecher',
  keywords: ['Design', 'Branding', 'UX'],
}

export default Frontpage
