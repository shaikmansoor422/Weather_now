

// finding the geographical location of the user's device by geolocation API

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        console.log(`Latitude:${latitude},Longitude:${longitude}`)

        // if the location found calling get_weather_by_location function to show the data in the page
        get_Weather_by_location(latitude, longitude)

    },
        (error) => {
            console.error("geolocation error:", error.message)
            alert("location access denied (or) difficulty in fetching.... please search by City")
        }
    );
}
else {
    alert("Geolocation is not supported by this browser (or) difficulty in fetching... Please search by City")
}

// If the geo-location didn't found we the weather data by city
let form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let city = document.getElementById("input_value").value.trim();
    if (city !== "") {
        get_Weather_by_city(city)
    }
    else {
        alert("Dear user please provide valid city 'name'")
    }
});


// fetching weather API by location by get_Weather_by_location function
function get_Weather_by_location(latitude, longitude) {
    fetch(
        `https://api.weatherapi.com/v1/current.json?key=924f75f7f6d54c85ba553415250503&q=${latitude},${longitude}`
    )
        .then((response) => response.json())
        .then((data) => { get_Weather(data) })
        .catch((error) => console.error("Error in fetching the weather:", error));
}


// fetching weather API by location by get_Weather_by_city function
function get_Weather_by_city(city) {
    fetch(
        `https://api.weatherapi.com/v1/current.json?key=924f75f7f6d54c85ba553415250503&q=${city}`
    )
        .then((response) => response.json())
        .then((data) => { get_Weather(data) })
        .catch((error) => console.error("Error in fetching the weather:", error));
}



// function to grab the data from API

function get_Weather(data) {
    console.log(data);

    //adding data to the Weather conditions
    document.getElementById(
        "temp"
    ).innerHTML = `<strong>${data.current.temp_c}°C</strong>`;
    document.getElementById(
        "humidity"
    ).innerHTML = `<strong>${data.current.humidity}(g/m^3)</strong>`;
    document.getElementById(
        "cloudcover"
    ).innerHTML = `<strong>${data.current.condition.text}</strong>`;
    document.getElementById(
        "feels_like"
    ).innerHTML = `<strong>${data.current.feelslike_c}°C</strong>`;
    document.getElementById(
        "last_updated"
    ).innerHTML = `<strong>${data.current.last_updated}</strong>`;
    document.getElementById(
        "heat_index"
    ).innerHTML = `<strong>${data.current.heatindex_c}°C</strong>`;


    //adding data to the Geographical Location
    document.getElementById(
        "locate"
    ).innerHTML = `<strong>${data.location.name}</strong>`;
    document.getElementById(
        "country"
    ).innerHTML = `<strong>${data.location.country}</strong>`;
    document.getElementById(
        "region"
    ).innerHTML = `<strong>${data.location.region}</strong>`;
    document.getElementById(
        "lat"
    ).innerHTML = `<strong>${data.location.lat}°</strong>`;
    document.getElementById(
        "lon"
    ).innerHTML = `<strong>${data.location.lon}°</strong>`;
    document.getElementById(
        "timezone"
    ).innerHTML = `<strong>${data.location.localtime}</strong>`;


    //adding data to the Atmospheric wind data
    document.getElementById(
        "wind_speed"
    ).innerHTML = `<strong>${data.current.wind_kph}km/h</strong>`;
    document.getElementById(
        "visibility"
    ).innerHTML = `<strong>${data.current.vis_km}km</strong>`;
    document.getElementById(
        "precip"
    ).innerHTML = `<strong>${data.current.precip_mm}mm</strong>`;
    document.getElementById(
        "pressure"
    ).innerHTML = `<strong>${data.current.pressure_mb}mb</strong>`;
    document.getElementById(
        "wind_dirc"
    ).innerHTML = `<strong>${data.current.wind_dir}</strong>`;
    document.getElementById(
        "wind_chill"
    ).innerHTML = `<strong>${data.current.windchill_c}°C</strong>`;



    //calling functions for displaying city name and background image changing
    display_city_name(data)
    change_bg_image(data)

}

//function to show the location name in the main location block
function display_city_name(data) {
    let main_location_display = document.getElementById("main_location_display")
    main_location_display.style.display = "block"
    document.getElementById(
        "main_location_display"
    ).innerHTML = `<strong>${data.location.name}</strong>`;
}

// function to change the background image  depends upon the cloud cover
function change_bg_image(data) {

    let Updated_time = data.current.last_updated //its in form of  2025-03-05 18:30
    let time = parseInt(Updated_time.split(" ")[1].split(":")[0]) // take time out of the string

    if ((time <= 6 || time >= 18) && (data.current.condition.text == "Partly cloudy" || data.current.condition.text == "Clear" || data.current.condition.text == "Storms")) {
        document.body.style.backgroundImage = 'url("./images/night.jpg")';
    }

    else if (data.current.condition.text == "Sunny") {
        document.body.style.backgroundImage = 'url("./images/sunny.jpg")';

    }
    else if (data.current.condition.text == "Partly cloudy") {
        document.body.style.backgroundImage = 'url("./images/Partly cloudy.jpg")';

    }
    else if (data.current.condition.text == "Clear") {
        document.body.style.backgroundImage = 'url("./images/clear.jpg")';

    }
    else if (data.current.condition.text == "Rainy") {
        document.body.style.backgroundImage = 'url("./images/rainy.jpg")';

    }
    else if (data.current.condition.text == "Storms") {
        document.body.style.backgroundImage = 'url("./images/stroms.jpg")';

    }
    else {
        document.body.style.backgroundImage = 'url("./images/else_bg.jpg")';

    }

}

