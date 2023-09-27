import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Home } from "./components/pages";
import { BookDetails, BookList } from "./components/shared";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
