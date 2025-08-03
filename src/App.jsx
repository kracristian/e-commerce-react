import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/home.jsx";
import Car from "./pages/Car.jsx";
import Porsi from "./pages/porsi.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Car" element={<Car />} />
          <Route path="/porsi" element={<Porsi />} />
        </Routes>
      </Router>
      <footer>
        <p>&copy; 2023 My E-Commerce Store</p>
      </footer>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </>
  );
}

export default App;
