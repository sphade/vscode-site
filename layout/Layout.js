import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <div  >
      <Navbar />
      <main className='bg-gray-600'>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
