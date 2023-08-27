import React from "react";

import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../Assets/images/trevantaLogo.png";
import { scroller } from "react-scroll";

function Navbar({ clickOpen, styleClass }) {
  const scrollToDiv = () => {
    scroller.scrollTo("servicesDiv", {
      smooth: true,
      offset: -50,
    });
  };

  return (
    <nav
      className={`py-8 flex-1 justify-between items-center flex ${styleClass}`}
    >
      <Link to="/" className="flex items-center">
        <img src={Logo} alt="logo" className="w-52 ml-3" />
      </Link>
      <div>
        <div className="hidden c_lg:inline-block">
          <Link
            to="/"
            className="text-xl my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-main-clr-secondary-bright hover:text-main-clr-secondary-bright"
          >
            Home
          </Link>

          <Link
            to="/"
            onClick={scrollToDiv}
            className="text-xl my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-main-clr-secondary-bright hover:text-main-clr-secondary-bright"
          >
            Services
          </Link>

          <Link
            to="/about"
            className="text-xl my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-main-clr-secondary-bright hover:text-main-clr-secondary-bright"
          >
            About
          </Link>
        </div>
        <div className="inline-block">
          <Link
            to="/contact"
            className="uppercase hidden c_lg:inline-block rounded-full text-lg my-2 lg:text-base lg:my-0 font-semibold tracking-wide transition duration-300  border-transparent lg:mx-4 px-6 py-2 bg-main-clr-secondary-bright text-main-clr-off-white hover:bg-main-clr-secondary-dark focus:shadow-outline border-b-0"
          >
            Get Quotation
          </Link>

          <button
            type="button"
            className="block c_lg:hidden"
            onClick={clickOpen}
          >
            <FaBars className=" text-3xl mr-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
