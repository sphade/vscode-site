import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <div  >
      <Navbar />
      <main className='bg-gray-100 font-san'>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
