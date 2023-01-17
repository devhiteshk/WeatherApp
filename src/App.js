import { useState } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Weather from "./Components/Weather";
import Footer from "./Components/Footer";

function App() {
  const [city, setCity] = useState("");
  const [wdata, setWdata] = useState("");

  const API_URL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&" +
    "appid=" +
    process.env.REACT_APP_OW_TOKEN +
    "&units=metric";

  let getWeather = () => {
    axios.get(API_URL).then((res) => setWdata(res.data));
  };

  return (
    <div className="App">
      <Header city={city} setCity={setCity} getWeather={getWeather} />
      <Weather wdata={wdata} />
      <Footer />
    </div>
  );
}

export default App;
