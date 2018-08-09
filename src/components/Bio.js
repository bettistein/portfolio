import React from "react";
import style from "./bio.module.scss";
import shaka from "./images/shaka.svg";


class Bio extends React.Component { render() {
    return (
      <div className={style.root}>

      <div className={style.textLeft}>
        <h2>Design is where science and art break even.</h2>
        <p>Hi, I'm Betty Stein, and I create digital Brand Experiences,
        UIX and occasionally fun Illustrations.
        If you need a consistent user-centered visual language for both digital product and brand – hey, I'm your girl!
        </p>
        <img className={style.shaka} src={shaka} alt="shaka" width="30"/>
        </div>

        <p className={style.vertical}>Discover my Projects</p>


      </div>

    );
  }
}

export default Bio;
