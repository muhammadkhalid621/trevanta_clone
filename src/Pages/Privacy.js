import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Privacy() {
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
    <div className="">
      <header className="flex justify-between items-center max-w-screen-xl mx-auto w-full">
        <Navbar clickOpen={openSidebar} styleClass="text-white" />
        <Sidebar isOpen={isOpenSidebar} clickClose={closeSidebar} />
      </header>
      <div className="h-auto relative mx-auto flex lg:items-center items-start lg:justify-center justify-start">
        <div
          id="bolb"
          className="absolute w-[300px] h-[300px] S-xl:-top-[5px] lg:top-1 -top-25 right-[100px] rounded-full"
        ></div>
        <div className="mx-auto mb-20 lg:max-w-max-custom max-w-max-width w-smallWidth">
          <div className="flex flex-col items-start justify-center mt-5 space-y-10">
            <h1 className="text-main-clr-secondary-bright text-5xl font-bold text-center w-full mt-10">
              Privacy Policy
            </h1>
            <div className="flex flex-col text-main-clr-off-white justify-center space-y-8 my-20">
              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-main-bright font-semibold text-xl">
                  1 - General information
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  Phydias SA, located at rue des Pâquis 8 1202 Genève,
                  Switzerland (the “Company”, “we”, or “us”) is the operator of
                  any Website published by the Company, including, but not
                  limited to, www.tolcoin.co, www.tol.network, www.tolcash.com,
                  www.tolcoin.net, www.tolscan.com, www.tolscan.io (the
                  “Websites”).
                </p>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  As the operator of the Websites, we take the protection of
                  your personal data very seriously. We collect, process, and
                  use your personal data in accordance with this privacy policy
                  and in compliance with the Swiss Federal Act on Data
                  Protection (“FADP”), the Swiss Ordinance to the Federal Act on
                  Data Protection (“OFADP”), and the General European Data
                  Protection Regulation (“GDPR”), which are currently being
                  coordinated and under review as of 5th July, 2023.
                </p>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  This privacy policy (“Privacy Policy”) will provide you with
                  information about the collection, processing and use of your
                  personal data when using the Websites. In case you provide us
                  with the personal data of third persons (such as family
                  members or work colleagues) you should make sure that these
                  persons are familiar with this Privacy Policy and you should
                  only share their personal data if you have permission to do so
                  and ensure that his personal data is correct.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-main-bright font-semibold text-xl">
                  2 - Responsible Person
                </h2>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  For any matters relating to data protection you may contact
                  info@tolcoin.co in writing by e-mail.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-main-clr-main-bright font-semibold text-xl">
                  3 - Data processing in connection with the Websites
                </h2>

                <h4 className="text-main-clr-secondary-bright font-semibold text-lg ml-2">
                  3-1 - Visiting our Websites
                </h4>
                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  When you visit our Websites, the hosting provider(s) of our
                  Websites may automatically collect and store various
                  information in server log files that your browser transmits to
                  us. The information/data mentioned is neither assigned to
                  specific persons nor linked to data from other sources. The
                  following technical data may be recorded by us, as usual with
                  every connection with a web server, without your intervention,
                  and stored by us until automatic deletion after no later than
                  two days:
                </p>

                <ul className="ml-14 list-outside list-disc text-main-clr-off-white">
                  <li>Transaction records</li>
                  <li>Anonymized IP addresses</li>
                </ul>

                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  Any collection and processing of this technical data is for
                  the purpose of enabling the use of our Websites, continuously
                  ensuring system security and stability, optimizing our
                  Websites, and for internal statistical purposes. This is our
                  legitimate interest in the processing and review of our
                  pending GDPR compliance process.
                </p>

                <p className="mt-2 ml-5 w-[85%] text-main-clr-off-white">
                  Furthermore, the IP addresses may be evaluated, together with
                  other data, in case of attacks on the network infrastructure
                  or other unauthorized use or misuse of the Websites, for the
                  purpose of intelligence and protection, and if appropriate,
                  used in criminal proceedings for identification and civil and
                  criminal proceedings against the relevant users. This is our
                  legitimate interest in the processing and review of our
                  pending GDPR compliance process.
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

export default Privacy;
