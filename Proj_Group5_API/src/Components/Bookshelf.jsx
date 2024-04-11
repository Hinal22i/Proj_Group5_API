import { useEffect, useState } from "react";
import Book from "./Book";
let imageArray = [];

const BookShelf = () => {
  const bookID = "7n6j5Hplu38L1tlZDVGoMo";
  const [bookData, setBookData] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(true);
  let result;

  const getBookData = async (bookID) => {
    try {
      let SPACE_ID = "tckbs3t41kd5";
      let ACCESS_TOKEN = "5YKbClc0mVuVulCYhjocUmsVQzg2av5fApTUsYtbw7I";
      let fetchURL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries/?access_token=${ACCESS_TOKEN}&content_type=bookItem`;

      const response = await fetch(fetchURL);
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      result = await response.json();
      setBookData(result);
      console.log("result is ready: ", result);
      fetchImages(result);
    } catch (err) {
      console.log("Error fetching book:", err);
    }
  };
  const fetchImages = async (bookData) => {
    try {
      let SPACE_ID = "tckbs3t41kd5";
      let ACCESS_TOKEN = "5YKbClc0mVuVulCYhjocUmsVQzg2av5fApTUsYtbw7I";
      imageArray = [];
      for (const book of bookData.items) {
        const assetID = book.fields.img.sys.id;
        const imageFetchURL = `https://cdn.contentful.com/spaces/${SPACE_ID}/assets/${assetID}?access_token=${ACCESS_TOKEN}`;
        const imageResponse = await fetch(imageFetchURL);
        const imageResult = await imageResponse.json();
        imageArray.push(`https:${imageResult.fields.file.url}`);
        if (!imageResponse.ok) {
          throw new Error("Network response for image was not OK");
        }
        //setCoverImage(`https:${imageResult.fields.file.url}`);
        //console.log("images are ready: ", );
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getBookData(bookID);
  }, []);

  // if no data is here:
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="BookShelf">
      {bookData.items.map((book, index) => (
        <Book
          key={book.fields.id}
          title={book.fields.title}
          imageUrl={imageArray[index]}
          descriptionLink={book.fields.description}
        />
      ))}
    </div>
  );
};

export default BookShelf;
