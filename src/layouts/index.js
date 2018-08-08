import React from "react";
import Link from "gatsby-link";
import "../global.scss";
import style from "./index.module.scss";
import logo from "./B.svg";

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

// Navigation & Logo for all pages:
export default ({ children }) => (
  <div>
    <header className={style.nav}>

      <Link className={style.logo} to="/">
        <img src={logo} alt="logo" width="38"/>
      </Link>

      <ul className={style.navul}>
        <ListLink className={style.list}to="/about/">About</ListLink>
      </ul>
    </header>
    {children()}
  </div>
);
