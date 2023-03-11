import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Routes from './routes/Routes'
import background from '/'



function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
      <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
