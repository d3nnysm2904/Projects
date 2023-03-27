import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import DogsRoutes from "./DogsRoutes";
import { v4 as uuidv4 } from "uuid";

function App({ dogs }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogs} />
        <DogsRoutes dogs={dogs} />
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      id: uuidv4(),
      name: "Kinks",
      age: 5,
      src: "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?cs=srgb&dl=animal-blur-canine-551628.jpg&fm=jpg",
      facts: [
        "Kinks is active all the time  ",
        "Kinks is always happy",
        "Kinks is loves toys ",
      ],
    },
    {
      id: uuidv4(),
      name: "King",
      age: 8,
      src: "https://tse1.mm.bing.net/th?id=OIP.OvDVvaZ5tJDFlM5UwoYwDgHaE5&pid=Api&P=0",
      facts: [
        "King is very smart ",
        "King is always eating",
        "King is very scared of other dogs ",
      ],
    },
    { 
      id: uuidv4(),
      name: "Rocky",
      age: 5,
      src: "https://tse3.explicit.bing.net/th?id=OIP.l_yhLHsNILnzAYdDDx-R7QHaEk&pid=Api&P=0",
      facts: [
        "Rocky Destroys everything .",
        "Rocky always want more food.",
        "Rocky loves the mud.",
      ],
    },
    { 
      id: uuidv4(),
      name: "Yuma",
      age: 7,
      src: "https://tse4.mm.bing.net/th?id=OIP.4BPrLp8NSzMKQjDyVZtnSgHaE8&pid=Api&P=0",
      facts: [
        "Yuma is not missing a eye , is just closed",
        "Yuma is very active .",
        "Yuma loves is owner ",
      ],
    },
  ],
};

export default App;
