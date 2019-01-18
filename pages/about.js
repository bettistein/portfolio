import React from 'react'
import profilPhoto from '../assets/img/profile_photo.jpg'

const About = () => {
  return (
    <div>
      <div className="two-column-layout">
        <div className="image-wrapper">
        <img src={profilPhoto} />
        </div>
        <div className="text-wrapper">
          <h2>Hi there!</h2>
          <p>
            My name is Betty, I am a Digital Designer based in Vienna, Austria.
            After working for several years as a full-stack designer, I
            developed a passion for Branding, UI Design, and fun Illustrations.
            I take the time to understand your strategy, stakeholders and
            audiences and bring my experience and insights to the table.
          </p>
          <p>
            Previously I had a great time as Head of Brand Design with the
            talented people from Runtastic.
          </p>

          <p>
            I´m always looking for new adventures & friends, so feel free to
            send me a message.
          </p>
        </div>
      </div>
      <div>
        <h3>Clients & Partners</h3>
        <p>Runtastic Adidas Reason Association</p>
        <ul>
          <li>Runtastic</li>
          <li>adidas</li>
          <li>Reason-Association</li>
        </ul>
      </div>
    </div>
  )
}

About.meta = {
  title: 'About me',
  description: 'Portfolio of Bettina Steinbrecher',
  keywords: ['Design', 'Branding', 'UX'],
}

export default About
