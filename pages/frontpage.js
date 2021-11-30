import React from 'react'
import { workFrontMatters } from '../data'
import Footer from '../components/Footer'
import IcWeb from '../assets/img/ic-web@2x.svg'
import IcVisual from '../assets/img/ic-visual.svg'
import IcApps from '../assets/img/ic-apps.svg'
import IcIllus from '../assets/img/ic-illus.svg'
import logo from '../assets/img/betty_ecker_logo.svg'


const Header = props => {
  return (
    <div className="lpheader">
      <div className="lp-header-wrapper">
        <div className="nav-frontpage">
          <span className="logo"><a href="/"><img id="logo" src={logo}/> </a></span>
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
            Working on brand identities and digital product designs that are useful and showcase your personality.
          </h1>
          <p>
          As an independent Designer, and working several years in that field, I strategically design your digital product that resonates with your goals and value.
          </p>
        </div>
      </div>
    </div>
  )
}

const Services = props => {
  return (
    <div className="service-wrapper">
      <h2 className="small-headline">MY SERVICES:</h2>
      <div className="service-item-wrapper">
      <div className="service-item">
      <img id="ic-service" src={IcWeb} />
        <h2>Responsive web design</h2>
        <p>A strategically and well crafted landingpage or website that is fast, 
        responsive and easy to use, can make a difference in your business.</p>
      </div>
      <div className="service-item">
      <img id="ic-service" src={IcVisual} />
        <h2>Visual identity</h2>
        <p>More than a logo – having a professional and consistent visual brand helps you to connenct with your audience sustainably.</p>
      </div>
      </div>
      <div className="service-item-wrapper">
      <div className="service-item">
      <img id="ic-service" src={IcApps} />
        <h2>Digital product design  </h2>
        <p>UI/UX: Human centered apps are easy to use and fast to learn. Depending on your needs, I’m providing small app designs to whole design systems.</p>
      </div>
      <div className="service-item">
      <img id="ic-service" src={IcIllus} />
        <h2>Icons & illustrations</h2>
        <p>Icons and illustrations support your content and are much faster to read than written words. They are also useful to explain abstract topics.</p>
      </div>
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
      <div>
        <Services />
      </div>
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
  description: 'Design Portfolio of Digital Product and Brand Designer Betty Ecker',
  keywords: ['Design', 'Branding', 'UX','UI', 'adidas runtastic', 'ReScript', 'Betty Ecker', 'Bettina Ecker'],
}

export default Frontpage
