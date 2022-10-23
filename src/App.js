import React from "react";
import Links from "./components/Links";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Profile />
      <Links />
      <Footer />
    </div>
  );
};

export default App;
