import React from 'react'

import HeaderAbout from '../components/HeaderAbout'
import Footer from "../components/footer"


export default () => (

  <div>
  <HeaderAbout />
    <div style= {{
      maxWidth: 575,
      padding: '1.2rem',
      margin:'0 auto',

    }}>
      <h1>
        Hey there!
        </h1>
        <p>
        My name is Betty, I am a Digital Designer based in Vienna, Austria.
        After working for several years as a full-stack designer, I developed a
        passion for Branding, UI Design,
        and fun Illustrations.
        I take the time to understand your strategy, stakeholders and audiences
        and bring my experience and insights to the table.
        <p>
        Previously I had a great time as Head of Brand Design
        with the talented people from Runtastic.
        </p>

        <p>I´m always looking for new adventures & friends,
        so feel free to send me  <a href="mailto:hi@bettystein.com">a message.</a>
        </p>
        </p>
<div>
  <h3> Brands I worked for: </h3>
  </div>

      </div>

        <Footer />
  </div>

);
