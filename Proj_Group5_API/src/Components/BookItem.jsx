import { Component } from "react";

const BookItem = ({
  id,
  title,
  subtitle,
  description,
  authors,
  publisher,
  pages,
  year,
  img,
  url,
}) => {
  return (
    <>
      <div id="image-wrapper">
        <img src={img} width="100" alt={title} />
      </div>
      <div id="info-wrapper">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <h3>Description</h3>
        <p>{description}</p>
        <BookDetail label="authors" value={authors} />
        <BookDetail label="publisher" value={publisher} />
        <BookDetail label="pages" value={pages} />
        <BookDetail label="year" value={year} />
        <button>
          <a href={url}>Download</a>
        </button>
      </div>
    </>
  );
};

export default BookItem;
