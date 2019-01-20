import React from 'react'
import { workFrontMatters } from '../data'
import fpFlower from '../assets/img/fp-flower.svg'
import Footer from '../components/Footer'



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
            <a href="/about"> About</a>
          </ul>
        </li>
      </div>
      <div className="headercontent">
        <h1>
          Visual Designer, passionately crafting identities and user interfaces.
          Art Director. Cat lover.
        </h1>
        <p>You need a new Logo, App Design or a Website? <br/>
            I design beautiful, though useful solutions for you.
        </p>
      </div>
      <div className="fp-flower">
        <img src={fpFlower} />
      </div>
    </div>
  )
}

const Card = props => {
  const { thumbnail, sideinfo, href } = props
  return (
    <a href={href} className="card">
      <img src={thumbnail} />
      <p className="card-title">
        <span> {sideinfo.client} </span>
        <span className="card-projects"> {sideinfo.project} </span>
      </p>
    </a>
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
            <Card
              key={i}
              thumbnail={thumbnail}
              href={href}
              sideinfo={sideinfo}
            />
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
