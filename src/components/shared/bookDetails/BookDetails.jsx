import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import coverImg from "../../../assets/cover_not_found.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./bookDetails.css";

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;
          const newBook = {
            description: description
              ? description.value
              : "No description found",
            title: title,
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
            subject_places: subject_places
              ? subject_places.join(", ")
              : "No subject places found",
            subject_times: subject_times
              ? subject_times.join(", ")
              : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found",
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if (loading) return <Loader />;

  return (
    <section className="book-details">
      <div className="book-details-container">
        <button
          type="button"
          className="back-button"
          onClick={() => navigate("/book")}
        >
          <FaArrowLeft size={22} />
          <span className="back-button-content">Go Back</span>
        </button>

        <div className="book-details-content">
          <div className="book-details-content-img">
            <img src={book?.cover_img} alt="cover img" />
          </div>
          <div className="book-details-content-info">
            <div className="book-details-item title">
              <span>{book?.title}</span>
            </div>
            <div className="book-details-item description">
              <span>{book?.description}</span>
            </div>
            <div className="book-details-item">
              <span className="book-details-item-label">Subject Places: </span>
              <span className="book-details-item-value">
                {book?.subject_places}
              </span>
            </div>
            <div className="book-details-item">
              <span className="book-details-item-label">Subject Times: </span>
              <span className="book-details-item-value">
                {book?.subject_times}
              </span>
            </div>
            <div className="book-details-item">
              <span className="book-details-item-label">Subjects: </span>
              <span>{book?.subjects}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
