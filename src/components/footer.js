import React from "react";
import style from "./footer.module.scss";
import Link from "gatsby-link";


class Footer extends React.Component { render() {
    return (
<footer>
<div className={style.footerwrap}>
<p><b>©2018 Betty Stein</b> – Vienna AUT</p>
  <ul>
    <li><Link to="/">Work</Link></li>
    <li>Play</li>
    <li>News</li>
    <li><Link to="/about/">About</Link></li>
  </ul>
<p><a href="mailto:steinbrecher.bettina@gmail.com"> betty.stein@gmail.com</a></p>
</div>
</footer>

);
}
}

export default Footer;
