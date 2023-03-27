import React from "react";
import { Link } from "react-router-dom";
import "./css/Home.css";

const Home = () =>
{
  return (
    <div>
      <div className="link-holders">
        <p>VENDING MACHINE MENU</p>
        <Link exact="true" to="/soda">
          - Soda -
        </Link>
        <Link exact="true" to="/coffee">
          - Coffee -
        </Link>
        <Link exact="true" to="/chip">
          -Chip -
        </Link>
      </div>
    </div>
  );
};

export default Home;
