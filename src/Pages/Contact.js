import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Contact() {
  const [isOpenSidebar, setOpenSidebar] = useState(false);

  const openSidebar = () => {
    setOpenSidebar(true);
  };

  const closeSidebar = () => {
    setOpenSidebar(false);
  };

  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <header className="flex justify-between items-center max-w-screen-xl mx-auto w-full">
        <Navbar clickOpen={openSidebar} styleClass="text-white" />
        <Sidebar isOpen={isOpenSidebar} clickClose={closeSidebar} />
      </header>
      <Particles
        id="tsparticles"
        init={init}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <ContactUs completeForm={true} />
      <Footer />
    </div>
  );
}

export default Contact;
