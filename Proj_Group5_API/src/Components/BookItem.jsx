import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookDetail from "./BookDetail.jsx";

const BookItem = () => {
  const bookID = "7n6j5Hplu38L1tlZDVGoMo"; //useParams();
  const [bookData, setBookData] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBookData(bookID);
  }, []);

  const getBookData = async (bookID) => {
    try {
      let SPACE_ID = "tckbs3t41kd5";
      let ACCESS_TOKEN = "5YKbClc0mVuVulCYhjocUmsVQzg2av5fApTUsYtbw7I";
      let fetchURL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries/${bookID}?access_token=${ACCESS_TOKEN}`;

      // fetching the book data
      const response = await fetch(fetchURL);
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const result = await response.json();
      setBookData(result);

      // fetching the asset (cover img)
      let assetID = result.fields.img.sys.id;
      let imageFetchURL = `https://cdn.contentful.com/spaces/${SPACE_ID}/assets/${assetID}?access_token=${ACCESS_TOKEN}`;
      const imageResponse = await fetch(imageFetchURL);
      if (!imageResponse.ok) {
        throw new Error("Network response for image was not OK");
      }
      const imageResult = await imageResponse.json();
      setCoverImage(`https:${imageResult.fields.file.url}`);
      // Done fetching data
      console.log("Done fetching data.");
      console.log("book data: ", result);
      console.log("image url is: ", imageResult.fields.file.url);
      setLoading(false);
    } catch (err) {
      console.log("Error fetching book:", err);
      setLoading(false);
    }
  };

  // if no data is here:
  if (loading) {
    return <div>Loading...</div>;
  }

  // if we got some data:
  return (
    <div style={({ display: "flex" }, { width: "100%" })}>
      <div
        id="image-wrapper"
        style={{
          width: "100%",
          backgroundColor: "LightBlue",
          padding: "2rem",
          paddingTop: "8rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "30%",
            maxWidth: "350px",
            boxShadow:
              "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.29) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
          }}
          src={coverImage}
          alt={bookData.fields.title}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div id="info-wrapper" style={{ maxWidth: "1024px", padding: "2rem" }}>
          <h1>{bookData.fields.title}</h1>
          <h2>{bookData.fields.subtitle}</h2>
          <h3>Description</h3>
          <p>{bookData.fields.description}</p>
          <BookDetail
            labelField="authors"
            valueField={bookData.fields.authors}
          />
          <BookDetail
            labelField="publisher"
            valueField={bookData.fields.publisher}
          />
          <BookDetail labelField="pages" valueField={bookData.fields.pages} />
          <BookDetail labelField="year" valueField={bookData.fields.year} />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "3rem",
            }}
          >
            <button
              style={{
                padding: "1rem",
                borderRadius: "2rem",
                backgroundColor: "cornflowerBlue",
                border: "none",
                color: "white",
              }}
            >
              <a
                href={bookData.fields.url}
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Get the Book
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
