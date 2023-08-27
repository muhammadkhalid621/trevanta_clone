import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function FAQs() {
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
      <div className="h-auto relative overflow-hidden flex lg:items-center items-start lg:justify-center justify-start">
        <div
          id="bolb"
          className="absolute w-[300px] h-[300px] S-xl:-top-[5px] lg:top-1 -top-25 right-[100px] rounded-full"
        ></div>
        <div className="mx-auto mb-20 lg:max-w-max-custom max-w-max-width w-smallWidth">
          <div className="flex flex-col items-start justify-center mt-5 space-y-10">
            <h1 className="text-main-clr-secondary-bright text-5xl font-bold text-center w-full mt-10">
              FAQs
            </h1>
            <div className="flex flex-col text-main-clr-off-white space-y-8">
              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-main-bright font-semibold text-xl">
                  1 - What services does Trevanta Technology offer?
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  Trevanta Technology offers a range of services to meet your
                  technology needs. We provide IT consulting, software
                  development, managed IT services, and cybersecurity solutions.
                  Our services include strategic guidance, tailored IT roadmaps,
                  custom software development, proactive monitoring, network
                  management, data backup and recovery, cybersecurity measures,
                  and employee training.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-main-bright font-semibold text-xl">
                  2 - How can IT consulting benefit my business?
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  Our IT consulting services can benefit your business by
                  providing strategic guidance and expert advice on leveraging
                  technology. We work closely with your organization to
                  understand your unique challenges and objectives, and then
                  create tailored IT roadmaps to help you achieve your business
                  goals. Whether you need assistance with system integration,
                  cloud migration, or digital transformation, our experienced
                  consultants are here to support you.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-main-bright font-semibold text-xl">
                  3 - What types of software development does Trevanta
                  technology offer?
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  Trevanta Technology specializes in custom software
                  development. Our skilled developers employ the latest
                  technologies and agile methodologies to design, develop, and
                  deploy software applications that cater specifically to your
                  business requirements. We offer software development services
                  for web and mobile applications, enterprise software, and
                  e-commerce platforms.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-main-bright font-semibold text-xl">
                  4 - What are managed services, and why are they important?
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  Managed IT services allow you to focus on your core business
                  while we take care of your IT infrastructure. We provide
                  comprehensive support to ensure that your systems are secure,
                  optimized, and running smoothly around the clock. Our services
                  include proactive monitoring, network management, data backup
                  and recovery, cybersecurity solutions, and help desk support.
                  With our reliable and proactive approach, you can minimize
                  downtime and maximize productivity.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-main-bright font-semibold text-xl">
                  5 - How does Trevanta technology address cybersecurity
                  concerns?
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  At Trevanta Technology, we take cybersecurity seriously. Our
                  cybersecurity experts employ a multi-layered approach to
                  safeguard your business against cyber threats and breaches. We
                  conduct thorough risk assessments, implement robust security
                  measures, provide employee training, and monitor your systems
                  for any potential vulnerabilities. With our expertise, you can
                  trust us to keep your business secure and compliant with
                  industry regulations.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-main-bright font-semibold text-xl">
                  6 - How would Trevanta Technology benefit my business?
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  We have a team of highly skilled professionals with extensive
                  industry knowledge and expertise in the latest technologies.
                  We stay updated with the rapid-changing IT landscape to
                  provide you with the most innovative and effective solutions.
                  Additionally, we take a client-centric approach, building
                  strong and lasting partnerships with our clients. We
                  prioritize understanding your unique business requirements and
                  delivering solutions that align with your goals. Furthermore,
                  we are committed to delivering top-notch solutions and
                  services that exceed client expectations. Our rigorous quality
                  assurance processes ensure that we consistently deliver
                  reliable, scalable, and secure solutions to our clients.
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

export default FAQs;
