import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  //console.log("this is app.js");
  return (
    <div className="App bg-charcoal">
      <Header />
      <Home />
    </div>
  );
}

export default App;
