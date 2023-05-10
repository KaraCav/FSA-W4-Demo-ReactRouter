import React, { useState } from "react";

function AboutComponent() {
  const [textContent, setTextContent] = useState('We are a group of developers making websites together!');

    return (
      <React.Fragment>
        <div className="main">
          <h1>About Component</h1>

          <div>{textContent}</div>
        </div>
      </React.Fragment>
    );
  }

  export default AboutComponent;
