let stats = [
    { name: "Praha", temperature: 12, weather: "Slunečno" },
    { name: "Brno", temperature: 7, weather: "Bezmetrovo" },
    { name: "Ustí nad Labem", temperature: 3, weather: "Zataženo" },
    { name: "Plzeň", temperature: 10, weather: "Oblačno" },
    { name: "Liberec", temperature: 2, weather: "Sněží" },
]

const searchInput = document.getElementById("search-input");
stats.forEach(name => {
    const option = document.createElement("option");
    option.value = name.name;
    option.textContent = name.name;
    searchInput.appendChild(option);
});

let selected = { name: "", temperature: 0, weather: "" }

function search() {
    let value = document.getElementById("search-input").value

    for ( city in stats ) {
        if (stats[city].name == value) {
            selected = stats[city]
            let temperatureContainer = document.getElementById('temperature');
            temperatureContainer.innerHTML = '';
            let temperatureElement = document.createElement('div');
            temperatureElement.className = 'temperature';
            temperatureElement.innerHTML = `
                    <h2>${selected.name}</h2>
                    <h1 style="margin-top: 5vh;">${selected.temperature} °C</h1>
                `;
            temperatureContainer.appendChild(temperatureElement);

            let weatherContainer = document.getElementById('weather');
            weatherContainer.innerHTML = '';
            let weatherElement = document.createElement('div');
            weatherElement.className = 'weatherImage';
            if ( selected.weather === "Slunečno" ) {
                weatherElement.innerHTML = `
                    <img src="https://www.svgrepo.com/show/500706/sunny.svg" alt="" width="240">
                    <h2>${selected.weather}</h2>
                `;
            } else if ( selected.weather === "Bezmetrovo" ) {
                weatherElement.innerHTML = `
                    <img src="https://as1.ftcdn.net/v2/jpg/01/42/96/32/1000_F_142963227_tCnHS8bL0LK5IfO5F9rrblgSfIlsQNtA.jpg" alt="" width="240">
                    <h2>${selected.weather}</h2>
                `;
            } else if ( selected.weather === "Zataženo" ) {
                weatherElement.innerHTML = `
                    <img src="https://www.svgrepo.com/show/490646/cloudy.svg" alt="" width="240">
                    <h2>${selected.weather}</h2>
                `;
            } else if ( selected.weather === "Oblačno" ) {
                weatherElement.innerHTML = `
                    <img src="https://www.svgrepo.com/show/310222/weather-partly-cloudy-day.svg" alt="" width="240">
                    <h2>${selected.weather}</h2>
                `;
            } else if ( selected.weather === "Sněží" ) {
                weatherElement.innerHTML = `
                    <img src="https://www.svgrepo.com/show/347461/snowy.svg" alt="" width="240">
                    <h2>${selected.weather}</h2>
                `;
            }
        weatherContainer.appendChild(weatherElement);
        }
    }
}
search()