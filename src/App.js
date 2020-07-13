import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Nav from "./components/layout/Navbar";
import { Sliders } from "./components/layout/Carousel";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <Sliders />
      <Footer />
    </div>
  );
}

export default App;
