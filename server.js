const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Handle CORS
app.use(cors());

// Serialize dan Deserialize Input
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this is the route the API will call
const port = process.env.PORT || 8081;

// Welcome to the API
app.get('/', async (req, res) => {
    res.status(200).send({
        message: 'Welcome to API'
    })
})


// APP LISTEN
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

