// import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContent";
// import Category from "./Components/Category";
// import Footer from "./Components/Footer";
import BookItem from "./Components/BookItem";
import BookShelf from "./Components/BookShelf";
import { Routes, Route } from 'react-router-dom';
import MainLayout from "./Layouts/MainLayout";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path='/' element={<MainContent />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route path='/BookShelf' element={<BookShelf />} />
          <Route path='/:bookID' element={<BookItem />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
