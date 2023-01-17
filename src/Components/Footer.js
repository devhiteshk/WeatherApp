import React from "react";

function Footer() {
  return (
    <div className="flex justify-center items-center m-6 sm:m-0 sm:mt-4">
      <div className="flex align-center items-center">
        <i className="fa-brands fa-github fa-2x text-white"></i>
        <a
          className="text-white ml-4 text-1xl"
          href="https://github.com/devhiteshk/WeatherApp"
          rel="noreferrer"
          target="_blank"
        >
          Fork Me
        </a>
      </div>
    </div>
  );
}

export default Footer;
