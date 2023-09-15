import React, { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ButtonModal from "./components/Modal";
import Cards from "./components/Card";
import ChangeDocument from "./components/ChangeDocument";
import ComA from "./components/ComA";
import ComB from "./components/ComB";
import ComC from "./components/ComC";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const NameContext = createContext();

function App() {
  const [toggle, isToggle] = useState(true);

  const [name, setName] = useState(
    {
      fname: "Zuby",
      lname: "Kings",
      email: "Zubykings@gmail.com",
      state: "Abia",
    }
    // "Zuby"
  );

  return (
    // <BrowserRouter>
    <NameContext.Provider value={{ name, setName, toggle, isToggle }}>
      <div className="w-full">
        {/* <div className="flex flex-col md:flex-row items-center justify-center m-auto h-full ">
        <div className="flex md:flex-row flex-wrap gap-x-20 gap-y-5 items-center justify-center w-full h-full"> */}
        {/* <ButtonModal /> */}
        {/* <Cards /> */}
        {/* <ComA /> */}
        {/* <ChangeDocument /> */}
        {/* </div>
      </div> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </NameContext.Provider>
    // </BrowserRouter>
  );
}

export default App;
