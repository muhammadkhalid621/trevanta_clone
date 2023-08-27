import React, { useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

function Hero() {
  const [isOpenSidebar, setOpenSidebar] = useState(false);

  const openSidebar = () => {
    setOpenSidebar(true);
  };

  const closeSidebar = () => {
    setOpenSidebar(false);
  };

  const scrollToDiv = () => {
    scroller.scrollTo("servicesDiv", {
      smooth: true,
      offset: -50, // optional offset in pixels
    });
  };

  return (
    <div className="relative -mx-8 -mt-8 bg-hero-cover bg-center bg-cover h-screen min-h-144 ">
      <div className="z-10 absolute inset-0 bg-black opacity-50" />
      <div className="z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col">
        <header className="flex justify-between items-center max-w-screen-xl mx-auto w-full">
          <Navbar styleClass="text-gray-100" clickOpen={openSidebar} />
          <Sidebar isOpen={isOpenSidebar} clickClose={closeSidebar} />
        </header>
        <div className="px-4 flex flex-1 flex-col justify-center items-center">
          <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0">
            Welcome to Trevanta Technology!
          </h1>
          <h3 className="text-gray-100 mt-8">
            Secure, Smart, Sustainable Solutions
          </h3>
          <Link
            to="/"
            onClick={scrollToDiv}
            className="rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 font-bold shadow transition duration-300 bg-main-clr-secondary-bright text-main-clr-off-white hover:bg-main-clr-secondary-dark focus:outline-none focus:shadow-outline"
          >
            Find Out More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
