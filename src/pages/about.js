import React from 'react'

import HeaderAbout from '../components/HeaderAbout'
import Footer from "../components/footer"
import style from "./about.module.scss";
import un from "./images/un.svg"
import runtastic from "./images/runtastic.svg"
import adidas from "./images/adidas.svg"


export default () => (

  <div>
  <HeaderAbout />
    <div className={style.AboutWrapper} >
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
  <h3> Some Brands I had the pleasure to worked with and for: </h3>
    <img className={style.adidas} src={adidas} alt="adidas logo"/>
    <img className={style.un} src={un} alt="un environment logo"/>
    <img className={style.runtastic} src={runtastic} alt="runtastic logo"/>



  </div>

      </div>

        <Footer />
  </div>

);
