import "./App.css";
import { Routes, Route } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";
import Purple from "./components/Purple";
import Green from "./components/Green";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div id="container">
        <div id="navbar">
          <Nav />
          {/* <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/purple">Purple</Link>
          <Link to="/green">Green</Link> */}
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/" element={<Home />} />
            <Route path="/purple" element={<Purple />} />
            <Route path="/green" element={<Green />} />
          </Routes>
        </div>
      </div>
      <div className="footerBar">
        <Nav />
      </div>
    </>
  );
}

export default App;
