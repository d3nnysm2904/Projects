import React from "react";
import NavBar from "../NavBar";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Soda from "./Soda";
import Coffee from "./Coffee";
import Chip from "./Chip";
import Home from "./Home";

const VendingMachine = () =>
{
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/soda" element={ <Soda /> } />
          <Route path="/coffee" element={ <Coffee /> } />
          <Route path="/chip" element={ <Chip /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default VendingMachine;
