import React from 'react'
import { workFrontMatters } from '../data'



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
      <div className="headercontent">
       <h1>Visual Designer, passionately crafting identities and user interfaces. Art Director. Cat lover.</h1>
       <p>Here goes some more text.</p>
       </div>
    </div>
  )
}

const Card = props => {
  const { thumbnail, title, href } = props
  return (
    <div className="card">
      <img src={thumbnail} />
      <p><a href={href}> {title}</a></p>
    </div>
  )
}


const Footer = props => {
  return (
     <footer>
      <p className="logo">Betty Stein</p>
      <li>
        <ul>Projects</ul>
        <ul>About</ul>
        </li>
        </footer>
  )
}


const Frontpage = () => {
  return (
    <div>
      <Header />
      <div className="content">
      {workFrontMatters.map((frontMatter, i) => {
        const { thumbnail, title, href } = frontMatter
        return <Card key={i} thumbnail={thumbnail} title={title} href={href} />
      })}</div>
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




