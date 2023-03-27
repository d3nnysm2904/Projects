import React from "react";
import { Link } from "react-router-dom";
import "./css/Coffee.css";

const Coffee = () =>
{
  return (
    <div>
      <div className="img-drink">
        <br></br>
        <h1>Enjoy a Hot Coffee</h1>

        <Link exact="true" to="/">
          Home
        </Link>
      </div>
    </div>
  );
};
export default Coffee;