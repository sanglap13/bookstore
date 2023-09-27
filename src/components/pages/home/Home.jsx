import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../shared";

export const Home = () => {
  return (
    <div className="home">
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
