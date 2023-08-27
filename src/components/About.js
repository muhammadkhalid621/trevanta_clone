import React from "react";

import AboutImg from "../Assets/images/aboutImg.jpg";
import { Link } from "react-router-dom";


const state = false;

function About() {
	return (
		<div className="relative">
			<div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 md:items-center">
				<div className="w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-5/12 flex-shrink-0 h-80 md:h-auto relative">
					<img src={AboutImg} alt="" />
				</div>
				<div
					className={`w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-7/12 mt-16 md:mt-0 ${
						state
							? "md:mr-12 lg:mr-16 md:order-first"
							: "md:ml-12 lg:ml-16 md:order-last"
					}`}
				>
					<div className="lg:py-8 text-center md:text-left">
						
						<h2 className=" tracking-wide  mt-4 font-black text-main-clr-secondary-bright  text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight">
							About Us
						</h2>
						<p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-main-clr-off-white">
							At Trevanta Technology, we are committed to driving innovation and
							delivering cutting-edge IT solutions to businesses of all sizes.
							As a leading technology company, we strive to transform the way
							organizations operate, helping them stay ahead in today's rapidly
							evolving digital landscape. With our expertise and dedication, we
							enable businesses to unlock their full potential and achieve new
							heights of success.
						</p>
						<Link
							to="/about"
							className="px-8 py-3 font-bold rounded bg-main-clr-secondary-bright opacity-100 text-main-clr-off-white hover:bg-main-clr-secondary-dark focus:shadow-outline focus:outline-none transition duration-300 mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0"
						>
							Learn More
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
