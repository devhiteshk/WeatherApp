require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT || 80 ;
const bodyParser = require("body-parser");
const https = require("https");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

app.post("/", function (req, res) {
  const query = req.body.cityName;
  const apiKey = process.env.API_KEY;

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&APPID=" +
    apiKey +
    "&units=metric";
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      let flag = 0;
      let weatherData = NaN;
      let temp = NaN;
      let desc = NaN;
      let icon = NaN;
      let imageurl = NaN;
      try {
        weatherData = JSON.parse(data);
        temp = weatherData.main.temp;
        desc = weatherData.weather[0].description;
        icon = weatherData.weather[0].icon;
        imageurl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

        res.write(
          "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'/><meta http-equiv='X-UA-Compatible' content='IE=edge' /><meta name='viewport' content='width=device-width, initial-scale=1.0' />          <title>Weather API</title><link href='style.css' /><link rel='stylesheet' href='style.css'></head><body><div class='main-container'><div class='sub-container'>"
        );

        res.write(
          "<div class ='result'><h2>The temperature in <span class='temp'>" +
            `${query[0].toUpperCase()+query.substring(1)}` + '</span>'+
            " is " + "<span class='temp'>" +
            temp + "</span>"+
            " degrees Celcius."
        );
        res.write("<br>And the weather is currently <span class='weather'>" + desc + "</span></h2></div>");
        res.write("<div><img src=" + imageurl + "></div>");
        res.write(
          "<div><a href='/'><span class='ico'>Search Again ➡</span></div>"
        );
        res.write("</div></div></body></html>");
        res.send();
      } catch (e) {
        console.log(e);

        res.write(
          "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'/><meta http-equiv='X-UA-Compatible' content='IE=edge' /><meta name='viewport' content='width=device-width, initial-scale=1.0' />          <title>Weather API</title><link href='style.css' /><link rel='stylesheet' href='style.css'></head><body><div class='main-container'><div class='sub-container'>"
        );

        res.write("<div class='main-query'><h2>Enter a valid City</h2></div>");
        res.write(
          "<div><a href='/'><span class='ico'>Search Again ➡</span></div>"
        );
        res.write("</div></div></body></html>");
        res.send();
      }
    });
  });
});

app.listen(port);
