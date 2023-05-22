
const root = document.querySelector("#root");
const inputEl = document.querySelector("input");
const button = document.getElementById("magnify");

inputEl.addEventListener("change", (e) => {
    getWeatherCityData(e.target.value).then((data) => {
        root.appendChild(cityGen(data));
    });
});
// questo per usare bottone come input

button.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("magnify").click();
    }
});
//-----------------------------------------------------ASYNC
const apiKey = "ed0244e272624731ae5143834232205";
const api = "http://api.weatherapi.com/v1";
const getWeatherCityData = async (city) => {
    const url = `${api}/forecast.json?key=${apiKey}&days=7&q=${city}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

//--------------------------------FNCS
const cityGen = (cityData) => {
    const wrapperEl = document.createElement("div");
    const titleEl = document.createElement("h3");
    const tempCity = document.createElement("h3")
    const cityImg = document.createElement("img")

    wrapperEl.className = "city";
    titleEl.textContent = cityData.location.name;
    tempCity.textContent = cityData.current.temp_c + "°";
    cityImg.src = cityData.current.condition.icon

    wrapperEl.append(titleEl, tempCity, cityImg);
    return wrapperEl;
}





