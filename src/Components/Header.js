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
    <div className="flex justify-center items-center">
      <div className="center">Haze</div>
      <input
        type="text"
        name="City"
        value={city}
        onChange={handleChange}
        onKeyUp={handleEnter}
      />
    </div>
  );
}

export default Header;
