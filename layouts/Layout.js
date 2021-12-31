import { motion } from "framer-motion";
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  const variants = {
    hidden: { opacity: 0,  },
    enter: { opacity: 1, },
    exit: { opacity: 0, },
  };
  return (
    <div className=" min-h-screen min-w-full bg-primary z-10    ">
      <Header />
      <div className=" flex h-auto">
        <Sidebar />
        <motion.main
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ ease: "easeIn" }}
          className=" flex-1"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
};

export default Layout;
