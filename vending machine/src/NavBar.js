import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar ()
{
  return (
    <nav className="NavBar">
      <NavLink exact="true" to="/">
        Vending Machine
      </NavLink>
      <NavLink exact="true" to="/soda">
        - Soda -
      </NavLink>
      <NavLink exact="true" to="/coffee">
        - Coffee -
      </NavLink>
      <NavLink exact="true" to="/chip">
        -Chip-
      </NavLink>
    </nav>
  );
}

export default NavBar;
