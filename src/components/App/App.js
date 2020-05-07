import React from "react";
import Header from "../Header";
import SearchBar from "../SearchBar";
import Main from "../Main";
import Footer from "../Footer";
import "./App.css";

function App() {
  return (
    <div className="weather-channel__container">
      <Header />
      <SearchBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
