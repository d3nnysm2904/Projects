import React from "react";
import { Link } from "react-router-dom";
import "./css/Chip.css";

const Chip = () =>
{
    return (
        <div>
            <div className="img-chip">
                <br></br>
                <h1>Lays are the best! Enjoy</h1>

                <Link exact="true" to="/">
                    Home
                </Link>
            </div>
        </div>
    );
};
export default Chip;
