// Personal API Key for OpenWeatherMap API
const baseUrl = `http://api.openweathermap.org/data/2.5/weather?zip=`
const apiKey = '&appid=7cabf75ed9d657f73006ef6a549f1209'

// Create a new date instance dynamically with JS
const d = new Date();
const newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();


// Event listener to add function to existing HTML DOM element
const zipInput = document.querySelector("#zip").value

const generateButton = document.querySelector("#generate")
const entryHolder = document.querySelector("#entryHolder")
const dateContainer = document.querySelector("#date")
const tempContainer = document.querySelector("#temp")
const contentContainer = document.querySelector("#content")



generateButton.addEventListener('click', getWeather);



/* Function called by event listener */
function getWeather(e) {
    e.preventDefault()
    const zip = document.querySelector("#zip").value

    apiData(baseUrl, zip, apiKey)

        .then(function(data) {
        //posting data to file
        	
            postData('/new', {
                temp: data.main.temp,
                location: data.name,
            })
        })
        .then(
        // update ui

            () => appendData()

        )
        .then(
        	// clear inputs
        	clearInputs
        	)
}


/* Function to GET Web API Data*/


const apiData = async (baseUrl, zipInput, apiKey) => {
    const response = await fetch(`${baseUrl}${zipInput}${apiKey}`)

    try {
        const weatherInfo = await response.json();
        console.log(weatherInfo)
        return weatherInfo
    } catch (error) {
        console.log('Error fetching Data!', error);
    }

}




/* Function to POST data */
const postData = async (url = "", data = {}) => {

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    try {
        const Post = await response.json()
        console.log(Post)
        return Post;

    } catch (error) {
        console.log('there is an error posting', error);
    }

}

/* function to update ui */
const appendData = async () => {
    const request = await fetch('/all');
    const feelingsInput = document.querySelector("#feelings").value
    try {
        const theWeatherData = await request.json();
        console.log(theWeatherData);
        dateContainer.innerHTML = `Date: ${newDate}`;
        tempContainer.innerHTML = `Temperature: ${theWeatherData.temp}`;
        contentContainer.innerHTML = `Feelings: ${feelingsInput}`


    } catch (error) {
        console.log("error", error);
    }

}

/* Clear input*/
function clearInputs(){
	document.querySelector("#feelings").value = "";
	document.querySelector("#zip").value = "";

}