import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Home } from "./components/pages";
import { BookDetails, BookList } from "./components/shared";
import { AppProvider } from "./context/context";

const App = () => {
  return (
    <div className="app">
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/about" element={<About />} />
              <Route path="/book" element={<BookList />} />
              <Route path="/book/:id" element={<BookDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
};

export default App;
