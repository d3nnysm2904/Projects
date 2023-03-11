import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem2({ items, cantFind }) {
  const { id } = useParams();

  let drinks = items.find(drink => drink.id === id);
  if (!drinks) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {drinks.name}
          </CardTitle>
          <CardText className="font-italic">{drinks.description}</CardText>
          <p>
            <b>Recipe:</b> {drinks.recipe}
          </p>
          <p>
            <b>Serve:</b> {drinks.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem2;
