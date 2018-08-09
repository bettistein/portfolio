import React from "react";
import style from "./footer.module.scss";
import Link from "gatsby-link";


class Footer extends React.Component { render() {
    return (
<footer>
<div className={style.footerwrap}>
<p><b>©2018 Betty Stein</b> – Vienna AUT </p>
  <ul>
    <li><Link to="/">Work</Link></li>

    <li><Link to="/about/">About</Link></li>
  </ul>

<p><a href="mailto:hi@bettystein.com"> hi@betty.stein.com</a></p>
</div>
</footer>

);
}
}

export default Footer;
