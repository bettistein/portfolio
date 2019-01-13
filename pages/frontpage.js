import React from 'react'
import { workFrontMatters } from '../data'

const Card = props => {
  const { thumbnail, title } = props
  return (
    <div className="card">
      <img src={thumbnail} />
      {title}
    </div>
  )
}

const Header = props => {
  return (
    <div className="lpheader">
     <div className="nav">
      <p className="logo">Betty Stein</p>
      <li>
        <ul>Projects</ul>
        <ul>About</ul>

        </li>
      </div>
      <div className="content">
       <h1>Visual Designer, passionately crafting identities and user interfaces. Art Director. Cat lover.</h1>
       <p>Here goes some more text.</p>
       </div>
    </div>
  )
}

const Frontpage = () => {
  return (
    <div>
      <Header />
      {workFrontMatters.map((frontMatter, i) => {
        const { thumbnail, title } = frontMatter
        return <Card key={i} thumbnail={thumbnail} title={title} />
      })}
    </div>
  )
}

Frontpage.meta = {
  title: 'Home',
  description: 'Portfolio of Bettina Steinbrecher',
  keywords: ['Design', 'Branding', 'UX'],
}

export default Frontpage
