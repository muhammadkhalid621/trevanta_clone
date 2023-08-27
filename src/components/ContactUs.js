import React from "react";

import EmailIllustrationSrc from "../Assets/images/email-illustration.svg";
import { Link } from "react-router-dom";

function ContactUs({ completeForm }) {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24">
        <div className="w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-5/12 flex-shrink-0 h-80 md:h-auto">
          <img
            className="rounded bg-contain bg-no-repeat bg-center h-full m-5 px-20"
            src={EmailIllustrationSrc}
            alt="contact"
          />
        </div>
        <div className="w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-7/12 mt-16 md:mt-0 ml-2 md:ml-12 lg:ml-16 md:order-first">
          <div className="lg:py-8 px-8 text-center md:text-left ml-5">
            <h5 className=" text-basic text-main-clr-secondary-bright mt-4 font-black text-4xl sm:text-5xl lg:text-5xl text-center md:text-left leading-tight">
              Partner with Trevanta Technology:
            </h5>
            <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-main-clr-off-white">
              Experience the transformative power of technology with Trevanta
              Technology as your IT partner. Contact us today to discuss your
              business needs, and let us help you drive innovation, optimize
              processes, and propel your organization to new heights of success.
              Together, we can unlock your full potential in the digital age!
            </p>
            <form
              className="mt-8 md:mt-10 text-sm flex flex-col ml-2"
              action="#"
              method="get"
            >
              {completeForm && (
                <>
                  <input
                    className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hover:border-basic-500 pl-6"
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                  />

                  <input
                    className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hover:border-basic-500 pl-6"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                  />

                  <input
                    className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hover:border-basic-500 pl-6"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  />

                  <textarea
                    className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hover:border-basic-500 pl-6"
                    name="message"
                    placeholder="Your Message Here"
                  ></textarea>
                </>
              )}
              <Link
                to="/contact"
                className="w-32 uppercase px-8 py-3 font-bold rounded bg-main-clr-secondary-bright opacity-100 text-main-clr-off-white hover:bg-main-clr-secondary-dark focus:shadow-outline focus:outline-none transition duration-300 mt-5 pl-6 text-center"
                type="submit"
              >
                Get Quotation
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
