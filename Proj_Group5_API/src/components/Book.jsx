import { useEffect, useState } from "react";

const Book = ({ title, imageUrl, descriptionLink }) => {
  return (
    <div className="book">
      <img src={imageUrl} alt={imageUrl} />
      <div className="book-title">{title}</div>
      <a href={descriptionLink}>Learn More</a>
    </div>
  );
};

export default Book;