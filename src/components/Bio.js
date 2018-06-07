import React from "react";
import style from "./bio.module.scss";
import shaka from "./images/shaka.svg";



class Bio extends React.Component { render() {
    return (
      <div className={style.root}>
      <div className={style.textLeft}>
        <h2>Hi, I’m doing Branding,  UIX and Illustration.</h2>
        <p>I help Brands having a user-centered visual language & communication,
        including Branding, Interactions and Interfaces,
        set up for a digital world.</p>
        <img src={shaka} alt="shaka" width="26" />
        </div>
        <p className={style.vertical}>Discover my Projects</p>
      </div>
    );
  }
}

export default Bio;
