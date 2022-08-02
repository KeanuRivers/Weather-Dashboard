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