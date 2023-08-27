import React, { useEffect } from "react";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";
import FramerMotions from "../components/FramerMotions";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";

function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <FramerMotions>
        <Hero />
        <About />
        <Services />
        <ChooseUs />
        <Testimonials />
        <ContactUs completeForm={false} />
        <Footer />
      </FramerMotions>
    </>
  );
}

export default Home;
