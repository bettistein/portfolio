import React from "react";
import Link from "gatsby-link";
import "../global.scss";
import style from "./index.module.scss";

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

// Global Stlye & Navigation:
export default ({ children }) => (
  <div>
    <header className={style.header}>
      <Link className={style.logo} to="/">
        <p>B</p>
      </Link>

      <ul>
        <ListLink to="/about/">About</ListLink>
      </ul>
    </header>
    {children()}
  </div>
);
