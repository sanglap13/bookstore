import React from "react";
import Navbar from "../navbar/Navbar";
import { Searchbar } from "..";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="header-content-container">
        <h2 className="header-title">find your book of choice.</h2>
        <br />
        <p className="header-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae
          sapiente quibusdam consequatur perspiciatis facere laboriosam non
          nesciunt at id repudiandae, modi iste? Eligendi, rerum!
        </p>
        <Searchbar />
      </div>
    </div>
  );
};

export default Header;
