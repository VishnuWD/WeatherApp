const BaseUrl = ' http://api.weatherapi.com/v1/current.json?key=4b329cddd7884e80abb200429232006&q='
const InputSearch = document.getElementById("SearchInput")
const SearchButton = document.getElementById("SearchButton")
const title = document.getElementById("title")
const temp =document.getElementById("temp")
const humid = document.getElementById("humidity")
const feels = document.getElementById("feels")

const api = async (search) =>{
	search = InputSearch.value

try {
	const response = await fetch(`${BaseUrl}${search}`);
	const result = await response.json();
	
	title.innerHTML = `<div class="title"> ${result.location.name} </div> <p>${result.location.region}</p>`
	temp.innerHTML =`Temp: ${result.current.temp_c} c`
	humid.innerHTML = `Humidity: ${result.current.humidity}`
	feels.innerHTML = `Feels like: ${result.current.feelslike_c} c`
} catch (error) {
	console.error(error);
}
}

SearchButton.onclick = () =>{
	api()
}
api().then(value => console.log(value))


