import {city_data_apiKey} from "./config.js"

window.onload = () => {
    //Fetching the bangalore weather data
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${city_data_apiKey}&q=bangalore`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
  
        //adding data to the Weather conditions
        document.getElementById(
          "bang_temp"
        ).innerHTML = `<strong>${data.current.temp_c}°C</strong>`;
        document.getElementById(
          "bang_humi"
        ).innerHTML = `<strong>${data.current.humidity}(g/kg)</strong>`;
        document.getElementById(
          "bang_wind"
        ).innerHTML = `<strong>${data.current.wind_kph}kph</strong>`;
      })
      .catch((error) => console.error("Error:", error));
  
    //Fetchig the chennai weather data
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${city_data_apiKey}&q=chennai`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
  
        //adding data to the Weather conditions
        document.getElementById(
          "chen_temp"
        ).innerHTML = `<strong>${data.current.temp_c}°C</strong>`;
        document.getElementById(
          "chen_humi"
        ).innerHTML = `<strong>${data.current.humidity}(g/kg)</strong>`;
        document.getElementById(
          "chen_wind"
        ).innerHTML = `<strong>${data.current.wind_kph}kph</strong>`;
      })
      .catch((error) => console.error("Error:", error));
  
    ////Fetchig the mumbai weather data
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${city_data_apiKey}&q=mumbai`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
  
        //adding data to the Weather conditions
        document.getElementById(
          "mum_temp"
        ).innerHTML = `<strong>${data.current.temp_c}°C</strong>`;
        document.getElementById(
          "mum_humi"
        ).innerHTML = `<strong>${data.current.humidity}(g/kg)</strong>`;
        document.getElementById(
          "mum_wind"
        ).innerHTML = `<strong>${data.current.wind_kph}kph</strong>`;
      })
      .catch((error) => console.error("Error:", error));
  
    //Fetchig the kolkata weather data
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${city_data_apiKey}&q=kolkata`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
  
        //adding data to the Weather conditions
        document.getElementById(
          "kol_temp"
        ).innerHTML = `<strong>${data.current.temp_c}°C</strong>`;
        document.getElementById(
          "kol_humi"
        ).innerHTML = `<strong>${data.current.humidity}(g/kg)</strong>`;
        document.getElementById(
          "kol_wind"
        ).innerHTML = `<strong>${data.current.wind_kph}kph</strong>`;
      })
      .catch((error) => console.error("Error:", error));
  };
  