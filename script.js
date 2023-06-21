const BaseUrl = "https://api.openweathermap.org/data/2.5/weather?q="
const restUrl = "&units=metric&appid=0d75f5661308747e76a4d8483923b728"
const InputSearch = document.getElementById("SearchInput")
const SearchButton = document.getElementById("SearchButton")
const title = document.getElementById("title")
const temp =document.getElementById("temp")
const humid = document.getElementById("humidity")
const feels = document.getElementById("feels")
const weather = document.getElementById("weather")

// 0d75f5661308747e76a4d8483923b728
const api = async (search) =>{
	search = InputSearch.value

try {
	const response = await fetch(`${BaseUrl}${search}${restUrl}`);
	const result = await response.json();
	console.log(result.weather)
	
	title.innerHTML = `<div class="title"> ${result.name} </div> <p>${result.sys.country}</p>`
	weather.innerHTML = `${result.weather[0].main}`
	temp.innerHTML =`Temp: ${result.main.temp} c`
	humid.innerHTML = `Humidity: ${result.main.humidity}`
	feels.innerHTML = `Feels like: ${result.main.feels_like} c`
} catch (error) {
	console.error(error);
}
}

SearchButton.onclick = () =>{
	api()
}
api().then(value => console.log(value))


