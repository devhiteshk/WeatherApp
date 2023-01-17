import React from "react";
let previousCity = "";

function Header({ city, setCity, getWeather }) {
  let handleChange = (e) => {
    setCity(e.target.value);
    e.preventDefault();
  };

  let handleEnter = (e) => {
    if (e.keyCode === 13 && previousCity !== city) {
      getWeather();
      previousCity = city;
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center bg-gradient-to-r from-rose-500 to-pink-500 font-bold text-4xl text-zinc-100 p-2">
        <h1>
          <i className="fa fa-cloud"></i> Cloudy
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center mt-6 mb-6 sm:flex-row">
        <div className="flex justify-center items-center ">
          <i className="fa-solid mr-6 fa-sun fa-3x text-amber-400" />
          <span className=" text-white font-bold text-2xl mr-2">
            Your City ?
          </span>
        </div>
        <div className="flex justify-center items-center mt-6 sm:mt-0">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 font-bold leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="City"
            value={city}
            onChange={handleChange}
            onKeyUp={handleEnter}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
