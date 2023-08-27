import React, { useEffect } from "react";

import WOW from "wowjs";

import { MdSecurity, MdManageHistory } from "react-icons/md";
import { GrCloudSoftware } from "react-icons/gr";
import { IoMdContacts } from "react-icons/io";

const Services = () => {
  const cards = [
    {
      images: IoMdContacts,
      title: "IT Consulting",
      description:
        "Strategic guidance and tailored IT roadmaps for system integration, cloud migration, and digital transformation.",
      direction: "slideInLeft",
      duration: "2s",
      delay: "4s",
    },
    {
      images: GrCloudSoftware,
      title: "Software Development",
      description:
        "Custom software solutions, including web and mobile applications, enterprise software, and e-commerce platforms.",
      direction: "slideInLeft",
      duration: "2s",
      delay: "3s",
    },
    {
      images: MdManageHistory,
      title: "Managed IT Services",
      description:
        "Proactive monitoring, network management, data backup and recovery, cybersecurity solutions, and help desk services.",
      direction: "slideInLeft",
      duration: "2s",
      delay: "2s",
    },
    {
      images: MdSecurity,
      title: "Cybersecurity",
      description:
        "Multi-layered protection, risk assessments, security measures, employee training, and vulnerability monitoring.",
      direction: "slideInLeft",
      duration: "2s",
      delay: "1s",
    },
  ];

  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  return (
    <div className="relative" id="servicesDiv">
      <div className="flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24">
        <h2 className="w-full text-4xl sm:text-5xl font-black tracking-wide text-center text-main-clr-off-white">
          Our Professional
          <span className="text-main-clr-secondary-bright"> Services</span>
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 w-auto">
          {cards.map((card, i) => (
            <div
              className={`w-full lg:px-6 md:px-3 sm:px-6 px-0 flex wow ${card.direction}`}
              data-wow-duration={`${card.duration}`}
              data-wow-delay={`${card.delay}`}
              key={i}
            >
              <div className="flex flex-col mx-auto max-w-xs items-center px-6 py-10 bg-main-clr-secondary-bright rounded-lg mt-12">
                <span className="text-center rounded-full p-6 flex-shrink-0 relative">
                  <card.images className="w-12 h-12 text-main-clr-dark-second" />
                </span>
                <span className="textContainer mt-6 text-center">
                  <span className="mt-2 font-extrabold text-xl leading-none text-basic text-main-clr-off-white	">
                    {card.title}
                  </span>
                  <p className="mt-4 font-semibold text-main-clr-off-white text-sm leading-loose">
                    {card.description}
                  </p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
