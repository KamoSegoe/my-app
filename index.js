let now = new Date();

function formatDate(now) {
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  return `${day} ${hours}:${minutes}`;
}

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = formatDate(now);

function searchCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector(".search-input");
  let city = document.querySelector("h1");
  city.innerHTML = inputCity.value;
}

function updateUrl() {
  let cityInput = document.querySelector(".search-input");
  let cityName = cityInput.value;
  let apiKey = "2251te6ee295219d0bb431a04b1oef80";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metic`;

  function showTemperature(response) {
    let temperature = Math.round(response.data.temperature.current);

    let heading = document.querySelector(".current-temperature-value");
    heading.innerHTML = `${temperature}`;
  }

  axios.get(apiUrl).then(showTemperature);
}
let cityForm = document.querySelector("form");
cityForm.addEventListener("submit", searchCity);
cityForm.addEventListener("submit", updateUrl);
