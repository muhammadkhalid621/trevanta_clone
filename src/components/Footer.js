import React from "react";

import { Link } from "react-router-dom";

import Logo from "../Assets/images/trevantaLogo.png";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebook,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const redirectToExternalWebsite = (link) => {
    window.location.href = link;
  };

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        {
          text: "About",
          href: "/about",
        },
        {
          text: "Contact Us",
          href: "/contact",
        },
      ],
    },

    {
      title: "Legal",
      links: [
        {
          text: "Privacy Policy",
          href: "/privacy",
        },
        {
          text: "Terms of Use",
          href: "/terms",
        },
        {
          text: "FAQ",
          href: "/faq",
        },
      ],
    },
  ];

  return (
    <div className="relative border-t border-main-clr-secondary-bright -mx-8 -mb-8 px-8 z-100 bg-main-clr-dark-second">
      <div className="max-w-screen-c_xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between">
        <div className="text-left c_md:text-left w-full c_md:w-2/5 mb-10 c_md:mb-0">
          <div className="flex items-center justify-center c_md:justify-start">
            <img src={Logo} alt="logo" className="w-60" />
          </div>
          <p className="mt-4 max-w-xs font-medium text-sm mx-auto c_md:mx-0 c_md:mr-4 text-main-clr-off-white">
            Customized solutions to transform digitization for the new age of
            technology.
          </p>
          <div className="mt-4 flex items-center justify-center c_md:justify-start">
            <button
              type="button"
              onClick={() =>
                redirectToExternalWebsite(
                  "https://www.facebook.com/trevantaofficial/"
                )
              }
              className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-main-clr-secondary-bright transition duration-300 mr-4"
            >
              <FaFacebook className="w-7 h-4" />
            </button>
            <button
              type="button"
              onClick={() =>
                redirectToExternalWebsite("https://twitter.com/Trevanta_ae")
              }
              className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-main-clr-secondary-bright transition duration-300 mr-4"
            >
              <FaTwitter className="w-7 h-4" />
            </button>
            <button
              type="button"
              onClick={() =>
                redirectToExternalWebsite(
                  "https://www.linkedin.com/company/trevanta-technology/about/"
                )
              }
              className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-main-clr-secondary-bright transition duration-300 mr-4"
            >
              <FaLinkedinIn className="w-7 h-4" />
            </button>
            <button
              type="button"
              onClick={() =>
                redirectToExternalWebsite("instagram.co/trevanta.ae")
              }
              className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-main-clr-secondary-bright transition duration-300 mr-4"
            >
              <FaInstagram className="w-7 h-4" />
            </button>
            <button
              type="button"
              onClick={() =>
                redirectToExternalWebsite(
                  "https://www.youtube.com/@Trevantatechnology"
                )
              }
              className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-main-clr-secondary-bright transition duration-300 mr-4"
            >
              <FaYoutube className="w-7 h-4" />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap c_md:justify-between justify-center items-start c_md:space-x-28 space-x-14">
          {footerLinks.map((heading, mainIndex) => {
            return (
              <div className="text-left " key={mainIndex}>
                <h5 className="font-bold text-main-clr-secondary-bright">
                  {heading.title}
                </h5>
                <ul className="mt-4 text-sm font-medium">
                  {heading.links.map((link, index) => {
                    return (
                      <li className="mt-3" key={`${mainIndex}  ${index}`}>
                        <Link
                          to={link.href}
                          className="border-b-2 border-transparent text-main-clr-off-white hover:text-main-clr-secondary-bright hover:border-main-clr-secondary-bright pb-1 transition duration-300"
                        >
                          {link.text}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
