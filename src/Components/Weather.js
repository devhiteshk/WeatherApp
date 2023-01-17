import React from "react";
import sun_ris from "./sunrise.png";
import sun_su from "./sunset.png";

function Weather({ wdata }) {
  console.log(wdata);

  let getDayLength = (timestamp1, timestamp2) => {
    var difference =
      new Date() - timestamp2 * 1000 - (new Date() - timestamp1 * 1000);
    let Hours = Math.abs(Math.floor(difference / 1000 / 60 / 60) + 1);
    let Min = Math.abs(Math.floor((difference / 1000 / 60) % 60));
    return `${Hours}:${Min}`;
  };

  function getWindDirection(deg) {
    let direction;

    if ((deg >= 0 && deg <= 22.5) || (deg > 337.5 && deg <= 360)) {
      direction = "North";
    } else if (deg >= 22.5 && deg <= 67.5) {
      direction = "Northeast";
    } else if (deg >= 67.5 && deg <= 112.5) {
      direction = "East";
    } else if (deg >= 112.5 && deg <= 157.5) {
      direction = "Southeast";
    } else if (deg >= 157.5 && deg <= 202.5) {
      direction = "South";
    } else if (deg >= 202.5 && deg <= 247.5) {
      direction = "Southwest";
    } else if (deg >= 247.5 && deg <= 292.5) {
      direction = "West";
    } else if (deg >= 292.5 && deg <= 337.5) {
      direction = "Northwest";
    }
    return direction;
  }

  let sky;
  let temp;
  let feels_like;
  let sunrise;
  let sunset;
  let daylength;
  let preassure;
  let humidity;
  let visibility;
  let cloudliness;
  let wind_speed;
  let wind_direction;
  let icon;

  if (wdata) {
    sky = wdata.weather[0].description;
    temp = wdata.main.temp;
    feels_like = wdata.main.feels_like;
    sunrise = new Date(wdata.sys.sunrise * 1000).toLocaleTimeString("en-US");
    sunset = new Date(wdata.sys.sunset * 1000).toLocaleTimeString("en-US");
    daylength = getDayLength(wdata.sys.sunrise, wdata.sys.sunset);
    preassure = wdata.main.pressure;
    humidity = wdata.main.humidity;
    visibility = wdata.visibility;
    cloudliness = wdata.clouds.all;
    wind_speed = wdata.wind.speed;
    wind_direction = getWindDirection(wdata.wind.deg);
    icon = wdata.weather[0].icon;
  }

  return wdata ? (
    <div className="flex font-bold flex-col justify-center items-center sm:flex-row md:flex-row">
      <div className="mr-0 sm:mr-6">
        <div className="group1 h-56 mt-6 bg-white/90 p-4 max-w-sm rounded overflow-hidden shadow-lg ">
          <div className="bg flex items-center justify-center">
            <div className="text-rose-500 font-bold text-2xl pr-2 border-r-4 border-rose-400 ">
              {temp}
              <span>&#8451;</span>
            </div>
            <div className="ml-2">
              Feels Like:{" "}
              <span className="text-rose-500">{feels_like}&#8451;</span>
            </div>
          </div>
          <div className="bg flex items-center justify-center">
            <img
              src={"http://openweathermap.org/img/wn/" + icon + "@2x.png"}
              alt="describes weather"
            />
            {sky}
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-rose-500 hover:bg-rose-400 text-white font-bold py-2 px-4 border-b-4 border-rose-700 hover:border-rose-500 rounded">
              check in <span>&#8457;</span>
            </button>
          </div>
        </div>
        <div className="group2 h-56 bg-white/90 mt-6 p-4 flex items-center justify-center max-w-sm rounded overflow-hidden shadow-lg">
          <div className="bg items-center justify-center p-8">
            <div className="flex items-center justify-cente m-4">
              <img
                src={sun_ris}
                alt="sunrise"
                width={35}
                height={35}
                className="mr-2"
              />{" "}
              Sunrise: <span className="text-rose-500 ml-2">{sunrise}</span>
            </div>
            <div className="flex items-center justify-cente m-4">
              <img
                src={sun_su}
                alt="sunrise"
                width={35}
                height={35}
                className="mr-2"
              />{" "}
              Sunset: <span className="text-rose-500 ml-2">{sunset}</span>
            </div>
            <div className="flex items-center justify-cente m-4">
              {" "}
              <i className="fa-regular fa-clock ml-1 mr-4 text-2xl text-rose-500"></i>{" "}
              Day Length:{" "}
              <span className="text-rose-500 ml-2">{daylength}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="group2 h-56 bg-white/90 mt-6 p-4 flex items-center justify-center  mx-4 max-w-sm rounded overflow-hidden shadow-lg">
          <div className="bg items-center justify-center p-8">
            <div className="flex items-center justify-cente m-4">
              <i className="fa-solid fa-gauge-simple ml-1 mr-4 text-2xl text-rose-500"></i>
              Preassure:{" "}
              <span className="text-rose-500 ml-2">{preassure + " Pa"}</span>
            </div>
            <div className="flex items-center justify-cente m-4">
              <i className="fa-solid fa-droplet fa-2x ml-1 mr-4 text-2xl text-rose-500"></i>
              Humidity:{" "}
              <span className="text-rose-500 ml-2">{humidity + " %"}</span>
            </div>
            <div className="flex items-center justify-cente m-4">
              {" "}
              <i className="fa-solid fa-eye ml-1 mr-4 text-2xl text-rose-500"></i>{" "}
              Visibility:{" "}
              <span className="text-rose-500 ml-2">{visibility + " m"}</span>
            </div>
          </div>
        </div>
        <div className="group2 h-56 bg-white/90 mt-6 p-4 flex items-center justify-center mx-4 max-w-sm rounded overflow-hidden shadow-lg">
          <div className="bg items-center justify-center">
            <div className="flex items-center justify-cente m-4">
              <i className="fa-solid fa-cloud ml-1 mr-4 text-2xl text-rose-500"></i>
              Cloudiness:{" "}
              <span className="text-rose-500 ml-2">{cloudliness + " %"}</span>
            </div>
            <div className="flex items-center justify-cente m-4">
              <i className="fa-solid fa-wind ml-1 mr-4 text-2xl text-rose-500"></i>
              Wind Speed:{" "}
              <span className="text-rose-500 ml-2">{wind_speed + " m/s"}</span>
            </div>
            <div className="flex items-center justify-cente m-4">
              {" "}
              <i className="fa-solid fa-location-arrow ml-1 mr-4 text-2xl text-rose-500"></i>{" "}
              Wind Direction:{" "}
              <span className="text-rose-500 ml-2">{wind_direction}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Weather;
