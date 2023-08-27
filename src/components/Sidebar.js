import React from "react";
import { FaTimes } from "react-icons/fa";
import Logo from "../Assets/images/trevantaLogo.png";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";


const Sidebar = ({ isOpen, clickClose }) => {
  const scrollToDiv = () => {
    scroller.scrollTo("servicesDiv", {
      smooth: true,
      offset: -50,
    });
    clickClose();
  };
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  
  return (
    <nav
      className={classNames(
        isOpen ? "flex flex-1" : "hidden",
        "items-center justify-between c_lg:hidden"
      )}
    >
      <div className="z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white">
        <Link to="/" className="flex items-left max-w-xs py-2">
          <img src={Logo} alt="logo" className="w-52 mr-3 p-3" />
        </Link>
        <div className="flex flex-col items-center">
          <Link
            to="/"
            className="text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-basic-500 hover:text-basic-500 text-black"
          >
            Home
          </Link>

          <Link
            to="/"
            onClick={scrollToDiv}
            className="text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-basic-500 hover:text-basic-500 text-black"
          >
            Services
          </Link>

          <Link
            to="/about"
            className="text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-basic-500 hover:text-basic-500 text-black"
          >
            About
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link
            to="/contact"
            className="uppercase rounded-full text-lg my-2 lg:text-sm lg:my-0 font-semibold tracking-wide transition duration-300 border-transparent lg:mx-0 px-5 py-3 bg-basic-500 text-gray-100 hover:bg-basic-700 hover:text-gray-200 focus:shadow-outline border-b-0"
          >
            Get Quotation
          </Link>
        </div>
        <button
          type="button"
          onClick={clickClose}
          className="lg:hidden z-20 focus:outline-none text-black hover:text-basic-700 transition duration-300 fixed top-10 right-10"
        >
          <FaTimes className=" w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
