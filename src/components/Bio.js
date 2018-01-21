import React from "react";
import style from "./bio.module.scss";


class Bio extends React.Component {
  render() {
    return (
      <div className={style.root}>
        <p>Ist das Kunst, oder kann das weg?</p>
      </div>
    );
  }
}

export default Bio;
