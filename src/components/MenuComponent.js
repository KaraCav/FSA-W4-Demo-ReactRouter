import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";

import MenuItem from './MenuItem';
import { addNewItem } from "../state/stateSlice";

function MenuComponent() {
  const { menuItems } = useSelector((state) => state.stateValues);
  const dispatch = useDispatch();

  function handleClick(e) {
      e.preventDefault();
      dispatch(addNewItem());
  }

    return (
      <React.Fragment>
        <div className="main-menu">
          <h1>Menu Component</h1>

          <div>
            {menuItems.map((item) => (
              <MenuItem key={Math.random()} item={item} />
            ))}
          </div>

          <button onClick={handleClick}>Add New Item</button>
        </div>
      </React.Fragment>
    );
  }

export default MenuComponent;
