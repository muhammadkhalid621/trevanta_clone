import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import About_s1 from "../Assets/images/about_s_1.svg";
import About_s2 from "../Assets/images/about_s_2.svg";
import About_s3 from "../Assets/images/about_s_3.svg";
import About_s4 from "../Assets/images/about_s_4.svg";

function About() {
  const [isOpenSidebar, setOpenSidebar] = useState(false);

  const openSidebar = () => {
    setOpenSidebar(true);
  };

  const closeSidebar = () => {
    setOpenSidebar(false);
  };

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
      <div className="h-auto relative overflow-hidden flex flex-col lg:items-center items-start lg:justify-center justify-start">
        <div
          id="bolb"
          className="absolute w-[300px] h-[300px] S-xl:-top-[5px] lg:top-1 -top-25 right-[100px] rounded-full"
        ></div>
        <div className="relative flex flex-col items-center justify-center bg-hero-about bg-center bg-cover w-full min-h-144 h-80">
          <h1 className="text-main-clr-off-white text-5xl font-bold text-center w-full ">
            About Us
          </h1>
        </div>
        <div className="mx-auto mb-20 lg:max-w-max-custom max-w-max-width w-smallWidth">
          <div className="flex flex-col items-center space-y-20">
            <p className="mt-10 text-lg text-main-clr-off-white font-medium px-20">
              Welcome to Trevanta Technology! We are a leading technology
              company committed to driving innovation and delivering secure,
              smart, and sustainable IT solutions to businesses of all sizes.
              Our mission is to transform the way organizations operate in
              today's rapidly evolving digital landscape.
            </p>
            <div className="flex S-900:flex-row flex-col items-center justify-between S-900:space-x-10 space-x-0 S-900:space-y-0 space-y-10 px-20">
              <p className="text-lg text-main-clr-off-white font-medium S-900:w-1/2 w-full">
                With a team of highly skilled professionals and a client-centric
                approach, we strive to unlock your full potential and help you
                achieve new heights of success. We believe in the power of
                technology to optimize processes, drive efficiency, and propel
                your organization forward in the digital age.
              </p>
              <img
                src={About_s1}
                className="S-900:w-[500px] w-auto"
                alt="about-img-1"
              />
            </div>
            <div className="flex S-900:flex-row flex-col items-center justify-between S-900:space-x-10 space-x-0 S-900:space-y-0 space-y-10 px-20">
              <img
                src={About_s2}
                className="S-900:w-[500px] w-auto"
                alt="about-img-2"
              />
              <p className="text-lg text-main-clr-off-white font-medium S-900:w-1/2 w-full">
                At Trevanta Technology, we offer a range of services to meet
                your technology needs. Our IT consulting services provide
                strategic guidance, tailored IT roadmaps, and expert advice on
                system integration, cloud migration, and digital transformation.
                We understand that every business is unique, so our software
                development solutions are customized to cater to your
                requirements. Whether you need web and mobile applications,
                enterprise software, or e-commerce platforms, our skilled
                developers employ the latest technologies and agile
                methodologies to deliver robust and user-friendly solutions.
              </p>
            </div>
            <p className="mt-10 text-lg text-main-clr-off-white font-medium px-20">
              We also provide managed IT services to ensure that your IT
              infrastructure is secure, optimized, and running smoothly. Our
              proactive monitoring, network management, data backup and
              recovery, cybersecurity solutions, and help desk services allow
              you to focus on your core business while we take care of your IT
              needs.
            </p>
            <div className="flex flex-col place-items-end justify-center relative">
              <img
                src={About_s3}
                className="w-[500px] mx-auto"
                alt="about-img-3"
              />
              <p className="mt-10 text-lg text-main-clr-off-white font-medium px-28 relative -top-32">
                Cybersecurity is a top priority in today's threatened landscape,
                and we take it seriously. Our cybersecurity experts employ a
                multi-layered approach to protect your valuable data and digital
                assets. We conduct thorough risk assessments, implement robust
                security measures, provide employee training, and monitor your
                systems for potential vulnerabilities. With our comprehensive
                cybersecurity solutions, you can trust us to keep your business
                secure and compliant with industry regulations.
              </p>
            </div>
            <div className="flex S-900:flex-row flex-col items-center justify-between S-900:space-x-10 space-x-0 S-900:space-y-0 space-y-10 px-20">
              <img
                src={About_s4}
                className="S-900:w-[500px] w-auto"
                alt="about-img-4"
              />
              <div className="text-lg text-main-clr-off-white font-medium S-900:w-2/3 w-full flex flex-col space-y-10">
                <p className="w-full text-main-clr-off-white">
                  Our expertise, client-centric approach, and commitment to
                  quality and reliability set us apart from other technology
                  companies. Our team comprises highly skilled professionals
                  with extensive industry knowledge and expertise in the latest
                  technologies. We stay updated with the ever-changing IT
                  landscape to provide you with the most innovative and
                  effective solutions. We believe in building strong and lasting
                  partnerships with our clients and taking the time to
                  understand your unique business requirements. Our solutions
                  are tailored to address your challenges and help you achieve
                  your objectives. We are committed to delivering top-notch
                  solutions and services that exceed client expectations through
                  rigorous quality assurance processes.
                </p>
                <p className="w-full text-main-clr-off-white">
                  At Trevanta Technology, our ultimate goal is client
                  satisfaction. We measure our success by the success of our
                  clients. We strive to build trust and become your trusted
                  technology partner. Contact us today to discuss your business
                  needs and experience the transformative power of technology.
                  Let us help you drive innovation, optimize processes, and
                  propel your organization to new heights of success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
