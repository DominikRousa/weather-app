let stats = [
    {name: "Praha", temperature: 12, weather: "Slunečno"},
    {name: "Brno", temperature: 7, weather: "Oblačno"},
    {name: "Ustí nad Labem", temperature: 3, weather: "Černo"},
    {name: "Plzeň", temperature: 10, weather: "Bouřka"},
    {name: "Liberec", temperature: 2, weather: "SNěží"},
]

const searchInput = document.getElementById("search-input");
stats.forEach(name => {
    const option = document.createElement("option");
    option.value = name.name;
    option.textContent = name.name;
    searchInput.appendChild(option);
});

function search(){
    let value = document.getElementById("search-input").value
    let selected = {name: "", temperature: 0, weather: ""}

    for(city in stats) {
        if(value == stats.name){
            selected = stats[city]
        }
    }

    console.log(selected.name + " " + selected.temperature + " " + selected.weather);

}