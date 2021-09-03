// Express to run server and routes
const express = require('express')
const axios = require('axios');

const app  = express()

// using .env for managing sensitive keys
const dotenv = require('dotenv')

// Start up an instance of app

// Setup empty JS object to act as endpoint for all routes
projectData = {};



/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance
const cors = require('cors')

app.use(cors())

// Initialize the main project folder
app.use(express.static('website'))

// Spin up the server
const port = "8967"
const server = app.listen(port, ()=>{console.log(`running on localhost:${port}`)})




/* function  */
const weatherDetails = (req,res) =>{
		return res.send(projectData)
}


// Callback function to complete GET '/all'
app.get('/all', weatherDetails)


// getting and parsing post request
const postData = (req, res) => {
    projectData = req.body;
    return res.send(projectData);
}

// route for post data
app.post('/new',postData)

