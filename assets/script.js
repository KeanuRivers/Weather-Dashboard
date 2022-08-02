let APIKey = "c377eef0a9e60216a79d7e458bc50fd5";

$(document).ready(function () {

    $("#searchBtn").on("click", function () {
        let inputVal = $("#input").val();
        currentWeather(inputVal);
        forecast(inputVal);
        var history = getHistory;
        history.push(inputVal);
        localStorage.setItem("searchHistory", JSON.stringify(history));
        console.log(localStorage.getItem("searchHistory"));
    });
    
    display();
});

function currentWeather(cityName) {
  let queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=" + cityName + "&units=imperial" + "&appid=" + APIKey;
  let currentDate = new Date().toLocaleDateString();
  $
      .ajax({
          url: queryURL,
          method: "GET"
      })
      .then(function (response) {
          console.log(response);
          $("#currentforecast").empty();
          $("#currentforecast").append(`<div class="card bg-info text-dark" style="width: 18rem;"> <h3>${response.name}</h3><p>${currentDate}</p><p>${response.main.temp}°F
          </p><p>${response.wind.speed}mph</p><p>${response.main.humidity}%</p><img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png"></div>`)
      });
};