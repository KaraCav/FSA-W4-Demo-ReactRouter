import React, { useState } from "react";

function HomeComponent() {
  const [textContent, setTextContent] = useState('Welcome to our website!');
    return (
      <React.Fragment>
        <div className="main">
          <h1>Home Component</h1>

          <div>{textContent}</div>
        </div>
      </React.Fragment>
    );
  }

  export default HomeComponent;
