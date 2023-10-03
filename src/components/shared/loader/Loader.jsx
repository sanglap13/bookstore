import React from "react";
import LoaderImg from "../../../assets/loader.svg";

import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <img src={LoaderImg} alt="loader" />
    </div>
  );
};

export default Loader;
