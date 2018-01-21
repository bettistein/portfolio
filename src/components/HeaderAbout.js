import React from "react";

import aboutimg from "./aboutimg.png";

class HeaderAbout extends React.Component {
  render() {
    return (
      <div
        style={{
          display: `flex`,
          width: "100%",
          height: "70vh",
          margin: "0 auto",
          backgroundImage: "url(" + aboutimg + ")",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <p
          style={{
            color: "#ffffff",
            fontSize: "2.1rem",
            lineHeight: "2.25rem",
            textAlign: "center",
            maxWidth: 360,
            paddingTop: 200,
            margin: "0 auto"
          }}
        />
      </div>
    );
  }
}

export default HeaderAbout;
