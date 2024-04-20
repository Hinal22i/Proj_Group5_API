import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookDetail from "./BookDetail.jsx";

const BookItem = () => {
  const { bookID } = useParams();
  const [bookData, setBookData] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBookData(bookID);
  }, []);

  const getBookData = async (bookID) => {
    try {
      // let SPACE_ID = "tckbs3t41kd5";
      // let ACCESS_TOKEN = "5YKbClc0mVuVulCYhjocUmsVQzg2av5fApTUsYtbw7I";
      // let fetchURL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries/${bookID}?access_token=${ACCESS_TOKEN}`;
      let fetchURL = `http://localhost:8000/entries/${bookID}`;

      // fetching the book data
      const response = await fetch(fetchURL);
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const result = await response.json();
      setBookData(result);

      // fetching the asset (cover img)
      let assetID = result[0].fields.img.sys.id;
      let imageFetchURL = `http://localhost:8000/asset/${assetID}`;
      const imageResponse = await fetch(imageFetchURL);
      if (!imageResponse.ok) {
        throw new Error("Network response for image was not OK");
      }
      const imageResult = await imageResponse.json();
      setCoverImage(`https:${imageResult[0].fields.file.url}`);
      // Done fetching data
      console.log("Done fetching data.");
      console.log("book data: ", result);
      console.log("image url is: ", imageResult[0].fields.file.url);
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
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        marginTop: "1%",
        marginBottom: "1.8%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      <div
        id="image-wrapper"
        style={{
          width: "70%",
          height: "100%",
          backgroundColor: "#a4cdf988 ",
          margin: "5rem",
          marginLeft: "8rem",
          borderRadius: "2rem",
          padding: "2rem",
          paddingRight: "1rem",
          paddingTop: "8rem",
          paddingBottom: "8rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "100%",
            maxWidth: "450px",
            boxShadow:
              "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.29) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
          }}
          src={coverImage}
          // alt={bookData.fields.title}
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
        <div
          id="info-wrapper"
          style={{
            maxWidth: "1024px",
            paddingRight: "8rem",
          }}
        >
          <h1 style={{ fontSize: "3rem" }}>{bookData[0].fields.title}</h1>
          <h2>{bookData[0].fields.subtitle}</h2>
          <h3 style={{ fontSize: "1.7rem" }}>Description</h3>
          <p style={{ fontSize: "1.3rem", lineHeight: "1.9rem" }}>
            {bookData[0].fields.description}
          </p>
          <BookDetail
            labelField="authors:"
            valueField={bookData[0].fields.authors} 
          />
          <BookDetail
            labelField="publisher:"
            valueField={bookData[0].fields.publisher}
          />
          <BookDetail labelField="pages:" valueField={bookData[0].fields.pages} />
          <BookDetail labelField="year:" valueField={bookData[0].fields.year} />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "3rem",
            }}
          >
            <a className="book-link-negative" href={bookData[0].fields.url}>
              Get the Book
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
