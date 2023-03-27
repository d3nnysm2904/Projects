import React from "react";
import "./dogs.css";

import { Link } from "react-router-dom";

const Dogs = ({ dogs }) => {
  return (
    <div className="dogs-holder">
      {dogs.map((d) => {
        return (
          <div key={ d.id } className="Dog">
            <Link key={ d.name } exact="true" to={ `/${ d.name }` }>
              <h3>{d.name}</h3>
              <img src={d.src} alt={`Dog: ${d.name}`} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Dogs;
