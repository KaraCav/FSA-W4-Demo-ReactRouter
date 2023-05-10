import React from "react";
import { Link, useLocation } from "react-router-dom";

import '../styles/Display-Item.css';

function DisplayItem() {
    const { state } = useLocation();
    console.log("THE STATE: ", state);

    return (
      <React.Fragment>
        <div className="main">
        <div className="display-item">
          <h1>{state?.item?.name || 'Missing Name'}</h1>
            {/* <div>{state.map((item) => item)}</div> */}
          <div>
            {state?.item?.price || 'Missing Price'}
            <br />
            {state?.item?.description || 'Missing Description'}
          </div>

          <br />
          <Link to={'/menu'}>Return to Menu</Link>
        </div>
        </div>
      </React.Fragment>
    );
  }

export default DisplayItem;
