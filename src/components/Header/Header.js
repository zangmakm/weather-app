import React from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img className="header__logo" src={Logo} alt="logo" />
      <h1 className="header__title">Weather Channel</h1>
    </header>
  );
};

export default Header;
