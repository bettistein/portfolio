import React from 'react'
import profilPhotoL from '../assets/img/about/profil_photo.jpg'
import profilPhotoS from '../assets/img/about/profil_photo_s.png'

const About = () => {
  return (
    <div>
      <div className="about-wrapper">
      <div className="two-column-layout">
        <div className="image-wrapper">
          <img id="photo-l" src={profilPhotoL} />
        </div>
        <img id="photo-s" src={profilPhotoS} />
        <div className="text-wrapper">
          <h2> Bettina Ecker an independent designer of useful and beautiful things based in Vienna, Austria.</h2>
          <p>
            By working for several years at adidas runtastic, I
            specialized into digital product design and branding.</p>
            <p>
            Today I'm a freelance designer, creating for international brands as well as selected local start-ups and companies.
            I take the time to understand your strategy, stakeholders and
            audiences and bring my experience and insights to the table.
          </p>
          <p>
            I´m always looking for new project and friends, 
            so feel free to <a href="mailto:hi@bettystein.com">send me a message.</a>
          </p>
        </div>
      </div>
      <div className="two-column-layout-2">
      <div className="about-info-wrapper">
        <div>
          <h3>Clients, Collaborations</h3>
          <ul>
            <li>
              <a href="https://reason-association.com/" target="_blank">
                Reason Association
              </a>
            </li>
            <li>Runtastic</li>
            <li>adidas</li>
            <li>UN Environment</li>
            <li>Centiva</li>
            <li>OCaml Software Foundation</li>
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
              <a href="https://twitter.com/made_by_betty" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/bbettyecker" target="_blank">
                Dribbble
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/made.by.betty/" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/bettina-steinbrecher-b5249a159/"
                target="_blank"
              >LinkedIn
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
    </div>
    </div>
  )
}

About.meta = {
  title: 'About Betty Ecker',
  description: 'Portfolio of Betty Ecker',
  keywords: ['Design', 'Grafik Design', 'Logos', 'Branding', 'UI/UX', 'Bettina Ecker', 'Betty Ecker', 'ReScript', 'Centiva', 'Runtastic adidas', 'Logo Design'],
}

export default About

