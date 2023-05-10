import React from "react";
import { Link } from 'react-router-dom';

import '../styles/Menu-Item.css';

function MenuItem({ item }) {
    return (
      <React.Fragment>
        <div className="menu-item">
          <h3>{item?.name || 'Missing Name'}</h3>

          <div>
            {item?.price || 'Missing Price'}
            <br />
            {item?.description || 'Missing Description'}
          </div>

          <br />
          <Link to={`/menu/${item?.id}`} state={{ item }}>Display Item</Link>
        </div>
      </React.Fragment>
    );
  }

export default MenuItem;
