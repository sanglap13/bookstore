import React from "react";
import { Link } from "react-router-dom";

import "./bookList.css";

const Book = (book) => {
  return (
    <div className="book">
      <div className="book-item-img">
        <img src={book.cover_img} alt="cover" />
      </div>
      <div className="book-item-info">
        <Link to={`/book/${book.id}`} {...book}>
          <div className="book-item-info-title item">
            <span>{book.title}</span>
          </div>
        </Link>
        <div className="book-item-info-author item">
          <span className="book-item-info-author-label">Author: </span>
          <span>{book.author.join(", ")}</span>
        </div>
        <div className="book-item-info-edition item">
          <span className="book-item-info-edition-label">Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>
        <div className="book-item-info-publish-year item">
          <span className="book-item-info-publish-year-label">
            First Publish Year:{" "}
          </span>
          <span>{book.first_publish_year}</span>
        </div>
      </div>
    </div>
  );
};

export default Book;
