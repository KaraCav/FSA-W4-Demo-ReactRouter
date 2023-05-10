import React, { useState } from "react";

function ContactComponent() {
  const [textContent, setTextContent] = useState('Please reach out by phone or email!');

    return (
      <React.Fragment>
                <div className="main">

        <h1>Contact Component</h1>

        <div>
          {textContent}
        </div>
        </div>
      </React.Fragment>
    );
  }

  export default ContactComponent;
