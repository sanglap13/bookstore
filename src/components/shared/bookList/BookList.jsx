import React from "react";
import { useGlobalContext } from "../../../context/context";
import coverImg from "../../../assets/cover_not_found.jpg";
import Loader from "../loader/Loader";
import Book from "./Book";

import "./bookList.css";

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  if (loading) return <Loader />;

  return (
    <section className="booklist">
      <div className="booklist-container">
        <div className="booklist-section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="booklist-section-content">
          {booksWithCovers.slice(0, 30).map((item, index) => {
            return <Book key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BookList;
