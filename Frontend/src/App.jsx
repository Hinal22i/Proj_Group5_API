import MainContent from "./Components/MainContent";
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
          <Route index element={<MainContent />} />
      
        {/* <Route path="/" element={<MainLayout />}> */}
          <Route path='/BookShelf' element={<BookShelf />} />
          <Route path='/BookShelf/:bookID' element={<BookItem />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

// return (
//   <>
//     <Routes>
//       <Route path="/" element={<MainLayout />}>
//               {/* {/* MainContent will be rendered when path is exactly "/" /} */}
//         <Route index element={<MainContent />} />
//               {/* {/ BookShelf will be rendered when path is "/BookShelf" /} */}
//         <Route path="/BookShelf" element={<BookShelf />} />
//               {/* {/ BookItem will be rendered when path matches "/:bookID" */} */}
//         <Route path="/:bookID" element={<BookItem />} />
//       </Route>
//     </Routes>
//   </>
// );


{/* <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path='/' element={<MainContent />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route path='/BookShelf' element={<BookShelf />} />
          <Route path='/:bookID' element={<BookItem />} />
        </Route>
      </Routes>
    </> */}