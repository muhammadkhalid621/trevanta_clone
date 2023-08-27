import React, { useEffect } from "react";

import { Link } from "react-router-dom";

function Error() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <main className="page-100 flex justify-center items-center text-center text-main-clr-off-white">
      <section>
        <h1 className="text-9xl font-semibold">404</h1>
        <h3 className="tracking-wide capitalize mb-8 leading-5 text-2xl">
          Sorry, the page you tried cannot be found
        </h3>
        <Link
          to="/"
          className="hover:uppercase capitalize transition-all ease-in-out delay-500 px-6 py-3 bg-main-clr-secondary-bright text-main-clr-dark-main font-medium rounded-lg shadow-main-clr-secondary-bright"
        >
          back home
        </Link>
      </section>
    </main>
  );
}

export default Error;
