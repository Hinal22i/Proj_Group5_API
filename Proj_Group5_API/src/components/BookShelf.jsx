import {useEffect, useState} from "react";
import Book from './Book';
import contentful from 'contentful';

//const client = contentful.createClient({
  //  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID, 
    //accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN, 
//});

const BookShelf = () => {
    //
   // const [book, setBook] = useState([]);
//
  //  useEffect(() => {
    //    client.getEntries({content_type: 'book'})
      //  .then((response) => {
        //    const fetchBook = response.items.map((item) => ({
         //       id: item.sys.id, 
           //     title: item.fields.title, 
             //   imageURL: `https:${item.fields.covetImage.fields.file.url}`, 
              //  descriptionLink: `/description/${item.fields.slug}`
           // }));
            //
            //setBook(fetchBook);
        //})
        //.catch(console.error);
    //}, []);
//
const bookID = "7n6j5Hplu38L1tlZDVGoMo";
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
      let fetchURL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries/?access_token=${ACCESS_TOKEN}&content_type=bookItem`;
     
      const response = await fetch(fetchURL);
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const result = await response.json();
      setBookData(result);
console.log(result);

      // fetching the asset (cover img)
      let assetID = result.items[book].fields.img.sys.id;
      let imageFetchURL = `https://cdn.contentful.com/spaces/${SPACE_ID}/assets/?access_token=${ACCESS_TOKEN}`;
      const imageResponse = await fetch(imageFetchURL);
      if (!imageResponse.ok) {
        throw new Error("Network response for image was not OK");
      }
      const imageResult = await imageResponse.json();
console.log(imageResult);

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

    return (
        <div className="BookShelf">
            {bookData.items.map(book => (
                <Book
                key={bookData.items[book].fields.id}
                title={bookData.items[book].fields.title}
                imageUrl={coverImage}
                descriptionLink={bookData.items[book].fields.description}
                />
            ))} 
        </div>
    );
};

export default BookShelf;
