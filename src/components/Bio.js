import React from "react";

// Import typefaces

import bgimage from "./bgimage.jpg";
import { rhythm } from "../utils/typography";
import style from "./bio.module.scss";

class Bio extends React.Component {
  render() {
    return (
      <div className={style.root}>

        <p
          style={{
            fontSize: "2.3rem",
            lineHeight: "2.5rem",
            textAlign: "center",
            maxWidth: 360,
            paddingTop: 200,
            margin: "0 auto"
          }}
        >
          "Ist das Kunst, oder kann das weg?"
        </p>
      </div>
    );
  }
}

export default Bio;
