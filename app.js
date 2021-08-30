// Personal API Key for OpenWeatherMap API
const baseUrl = `http://api.openweathermap.org/data/2.5/weather?zip=`
const apiKey = '&appid=7cabf75ed9d657f73006ef6a549f1209'

// Create a new date instance dynamically with JS
const d = new Date();
const newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


// Event listener to add function to existing HTML DOM element
const zipInput = document.querySelector("#zip").value
const feelingsInput = document.querySelector("#feelings")
const generateButton = document.querySelector("#generate")
const entryHolder = document.querySelector("#entryHolder")
const dateContainer = document.querySelector("#date")
const tempContainer = document.querySelector("#temp")
const contentContainer = document.querySelector("#content")

function buildDom(e){
	e.preventDefault();
	dateContainer.textContent = newDate;
	contentContainer.textContent = feelingsInput.value;

}


const apiData = async (baseUrl,zipInput,apiKey)=>{
		console.log(`${baseUrl}${zipInput}${apiKey}`)
		// const response = await fetch(`${baseUrl}${zipInput}${apiKey}`)
		// const data = await response.json();
		// console.log(data);
		
}

// generateButton.addEventListener('click',buildDom);
generateButton.addEventListener('click',apiData);


/* Function to GET Web API Data*/



/* Function called by event listener */




/* Function to POST data */


/* Function to GET Project Data */