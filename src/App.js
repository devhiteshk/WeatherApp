import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [wdata, setWdata] = useState("");

  const API_URL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&" +
    "appid=" +
    process.env.REACT_APP_OW_TOKEN;

  let getWeather = () => {
    axios.get(API_URL).then((res) => setWdata(res.data));
  };

  return (
    <div className="App">
      <header className="App-header">Hello</header>
    </div>
  );
}

export default App;
