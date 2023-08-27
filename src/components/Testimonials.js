import React from "react";

const Testimonials = () => {
  return (
    <div className="min-w-screen min-h-screen  flex items-center justify-center py-5">
      <div className="w-full border-gray-200 px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-5 text-main-clr-off-white">
              What people <br />{" "}
              <span className="text-main-clr-secondary-bright">
                {" "}
                are saying
              </span>
            </h1>
          </div>
          <div className="text-center mb-10">
            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
          </div>
          <div className="-mx-3 md:flex items-start">
            <div className="px-3 md:w-1/3">
              <div className="w-full mx-auto rounded-lg bg-main-clr-secondary-bright border border-gray-800 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-800">
                    <img src="https://i.pravatar.cc/100?img=1" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-xl uppercase text-main-clr-off-white">
                      Emily Johnson
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="font-semibold text-main-clr-off-white text-sm leading-loose">
                    <span className="text-lg leading-none italic font-bold text-main-clr-off-white mr-1">
                      "
                    </span>
                    Working with the web development team was a game-changer for
                    my business. Their innovative solutions and attention to
                    detail brought my vision to life. John Smith, CEO of ABC
                    Enterprises.
                    <span className="text-lg leading-none italic font-bold text-main-clr-off-white ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full mx-auto rounded-lg bg-main-clr-secondary-bright border border-gray-800 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-800">
                    <img src="https://i.pravatar.cc/100?img=2" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-xl uppercase text-main-clr-off-white">
                      John Smith
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="font-semibold text-main-clr-off-white text-sm leading-loose">
                    <span className="text-lg leading-none italic font-bold text-main-clr-off-white mr-1">
                      "
                    </span>
                    I'm beyond impressed with the website developed by this
                    team. The user-friendly design and seamless navigation have
                    significantly improved user engagement. Emily Johnson,
                    Blogger & Influencer.
                    <span className="text-lg leading-none italic font-bold text-main-clr-off-white ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3 md:w-1/3">
              <div className="w-full mx-auto rounded-lg bg-main-clr-secondary-bright border border-gray-800 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-800">
                    <img src="https://i.pravatar.cc/100?img=3" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-xl uppercase text-main-clr-off-white">
                      Michael Williams
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="font-semibold text-main-clr-off-white text-sm leading-loose">
                    <span className="text-lg leading-none italic font-bold text-main-clr-off-white mr-1">
                      "
                    </span>
                    Top-notch web development services that exceeded my
                    expectations. They not only delivered a stunning website but
                    also ensured it was optimized for speed and performance.
                    Michael Williams, E-commerce Store Owner.
                    <span className="text-lg leading-none italic font-bold text-main-clr-off-white ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full mx-auto rounded-lg bg-main-clr-secondary-bright border border-gray-800 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-800">
                    <img src="https://i.pravatar.cc/100?img=4" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-xl uppercase text-main-clr-off-white">
                      Sarah Miller
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="font-semibold text-main-clr-off-white text-sm leading-loose">
                    <span className="text-lg leading-none italic font-bold text-main-clr-off-white mr-1">
                      "
                    </span>
                    As an artist, I wanted a website that showcased my work
                    elegantly. The web development team captured the essence of
                    my artistry beautifully, making my website a true
                    masterpiece. Sarah Miller, Visual Artist.
                    <span className="text-lg leading-none italic font-bold text-main-clr-off-white ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3 md:w-1/3">
              <div className="w-full mx-auto rounded-lg bg-main-clr-secondary-bright border border-gray-800 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-800">
                    <img src="https://i.pravatar.cc/100?img=5" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-xl uppercase text-main-clr-off-white">
                      Jessica Lee{" "}
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="font-semibold text-main-clr-off-white text-sm leading-loose">
                    <span className="text-lg leading-none italic font-bold text-main-clr-off-white mr-1">
                      "
                    </span>
                    'm grateful for the exceptional web development services I
                    received. They transformed my vague ideas into a captivating
                    website that perfectly represents my brand. Jessica Lee,
                    Small Business Owner.
                    <span className="text-lg leading-none italic font-bold text-main-clr-off-white ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full mx-auto rounded-lg bg-main-clr-secondary-bright border border-gray-800 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-800">
                    <img src="https://i.pravatar.cc/100?img=6" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-xl uppercase text-main-clr-off-white">
                      David Thompson{" "}
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="font-semibold text-main-clr-off-white text-sm leading-loose">
                    <span className="text-lg leading-none italic font-bold text-main-clr-off-white mr-1">
                      "
                    </span>
                    Reliable, efficient, and creative – this web development
                    team knows how to get things done. Their expertise played a
                    crucial role in enhancing our online presence. David
                    Thompson, Marketing Director.
                    <span className="text-lg leading-none italic font-bold text-main-clr-off-white ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
