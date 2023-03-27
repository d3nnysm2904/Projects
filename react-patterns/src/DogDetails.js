import React from "react";
import "./dogs.css";
import { v4 as uuidv4 } from "uuid";

const DogDetails = ({ dog }) => {

  const { name, age, src, facts } = dog
  return (
    <div className="dogs-holder">
      <div className="Dog">
        <h3>{ name }</h3>
        <h3>Age: { age }</h3>
        <img src={ src } alt={ `Dog: ${ dog.name }` } />
        { facts.map( ( f ) => (
          <p key={uuidv4()}>{f}</p>
        ))}
      </div>
    </div>
  );
};

export default DogDetails;
