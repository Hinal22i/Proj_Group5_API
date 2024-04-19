import Navbar from "../Components/Navbar";
import Category from "../Components/Category"
import Footer from "../Components/Footer";
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Category />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
