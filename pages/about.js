import React from 'react'
import profilPhotoL from '../assets/img/about/profil_photo.png'
import profilPhotoS from '../assets/img/about/profil_photo_s.png'

const About = () => {
  return (
    <div>
      <div className="two-column-layout">
        <div className="image-wrapper">
          <img id="photo-l" src={profilPhotoL} />
        </div>
        <img id="photo-s" src={profilPhotoS} />
        <div className="text-wrapper">
          <h2>Hey, I'm Betty and</h2>
          <p>
            I am a Digital Designer based in Vienna, Austria.
            After working for several years as a full-stack designer, I
            developed a passion for Branding, UI Design, and fun Illustrations.
            I take the time to understand your strategy, stakeholders and
            audiences and bring my experience and insights to the table.
          </p>
          <p>
            Previously I had a great time as Head of Brand Design with the
            talented people from Runtastic/adidas.
          </p>

          <p>
            I´m always looking for new adventures and friends, so feel free to  
            <a href="mailto:hi@bettystein.com">drop me a line</a>.
          </p>
        </div>
      </div>

      <div className="about-info-wrapper">
        <div>
          <h3>Clients & Partner</h3>
          <ul>
            <li>
              <a href="https://reason-association.com/" target="_blank">
                Reason Association
              </a>
            </li>
            <li>Runtastic</li>
            <li>adidas</li>
            <li>UN Environment</li>
          </ul>
        </div>

        <div>
          <h3>Social Media</h3>
          <ul>
            <li>
              <a href="https://www.behance.net/bettystein" target="_blank">
                Behance
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/bettystein" target="_blank">
                Dribbble
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/bettina-steinbrecher-b5249a159/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Field of Expertise</h3>
          <ul>
            <li>Logo Design</li>
            <li>Visual Identity</li>
            <li>Responsive Webdesign</li>
            <li>UI/UX mobile Apps</li>
            <li>Editorial Design</li>
            <li>Illustration</li>
            <li>Event Photography</li>
            <li>HTML / CSS</li>
          </ul>
        </div>
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
