import React from "react";
import "./css/Soda.css";
import { Link } from "react-router-dom";

const Soda = () =>
{
  return (
    <div className="img-holder">
      <br></br>
      <h1>Enjoy a Cold Soda</h1>
      <Link exact="true" to="/">
        Home
      </Link>
    </div>
  );
};

export default Soda;
