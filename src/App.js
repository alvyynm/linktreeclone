import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Links from "./components/Links";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Social from "./components/Social";
import "./App.css";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <Profile />
              <Links />
              <Social />
              <Footer />
            </div>
          }
        ></Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
