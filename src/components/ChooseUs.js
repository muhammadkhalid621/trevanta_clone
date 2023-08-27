import React from "react";

import { GiThink } from "react-icons/gi";
import { AiFillExperiment, AiOutlineSolution } from "react-icons/ai";
import { MdHighQuality, MdSentimentVerySatisfied } from "react-icons/md";

const ChooseUs = () => {
  const cards = [
    {
      images: AiFillExperiment,
      title: "Expertise",
      description:
        "Our skilled professionals have industry knowledge and expertise in the latest technologies, providing innovative solutions that adapt to the changing IT landscape.",
    },
    {
      images: GiThink,
      title: "Client-centric approach",
      description:
        "We build lasting partnerships, understanding your business requirements to deliver results aligned with your goals.",
    },
    {
      images: MdHighQuality,
      title: "Quality and reliability",
      description:
        "We deliver top-notch, scalable, and secure solutions, exceeding client expectations through rigorous quality assurance processes.",
    },
    {
      images: AiOutlineSolution,
      title: "Customized Solutions",
      description:
        "Tailored to your needs, our team develops solutions that address your challenges and help you achieve objectives.",
    },
    {
      images: MdSentimentVerySatisfied,
      title: "Client Satisfaction",
      description:
        "Our ultimate goal is your satisfaction. We build trust and become your trusted technology partner, measuring success by your success.",
    },
  ];

  return (
    <div className="relative">
      <div className="flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24">
        <h2 className="w-full text-4xl sm:text-5xl font-black tracking-wide text-center text-main-clr-off-white">
          Why
          <span className="text-main-clr-secondary-bright"> Choose Us</span>
        </h2>
        {cards.map((card, i) => (
          <div className="md:w-1/4 lg:w-1/4 px-6 flex" key={i}>
            <div className="flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-main-clr-secondary-bright rounded-lg mt-12">
              <span className="border-2 border-main-clr-secondary-bright text-center rounded-full p-6 flex-shrink-0 relative">
                <card.images className="w-8 h-8 text-main-clr-secondary-bright" />
              </span>
              <span className="textContainer mt-6 text-center">
                <span className="mt-2 font-bold text-xl leading-none text-basic text-main-clr-off-white">
                  {card.title}
                </span>
                <p className="mt-3 font-semibold text-main-clr-off-white text-sm leading-loose">
                  {card.description}
                </p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
