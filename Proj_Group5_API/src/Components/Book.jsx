// import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Book = ({ key, title, imageUrl, descriptionLink }) => {
  const navigate = useNavigate();

    const goSomewhere = () => {
        navigate(`/bookshelf/${descriptionLink}`)
      }

  return (
    <div className="book">
      <img src={imageUrl} alt={imageUrl} />
      <div className="book-title">{title}</div>
      <a className="book-link" onClick={goSomewhere}>
        Learn More
      </a>
    </div>
  );
};

export default Book;
