import React, { useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./searchbar.css";

const Searchbar = () => {
  // const { setSearchTerm, setResultTitle } = useGlobalContext();
  // const searchText = useRef("");
  // const navigate = useNavigate();

  // useEffect(() => searchText.current.focus(), []);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let tempSearchTerm = searchText.current.value.trim();
  //   if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
  //     setSearchTerm("the lost world");
  //     setResultTitle("Please Enter Something ...");
  //   } else {
  //     setSearchTerm(searchText.current.value);
  //   }

  //   navigate("/book");
  // };

  return (
    <div>
      <div className="searchbar">
        <div className="searchbar-content">
          <form className="searchbar-form">
            <div className="searchbar-form-element">
              <input
                type="text"
                className="form-input"
                placeholder="The Lost World ..."
              />
              <button type="submit" className="form-submit">
                <FaSearch className="form-submit-icon" size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
