const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv= require("dotenv");
const port = 3000;

dotenv.config({ debug: process.env.DEBUG });
// Connect Database
const connect = require('./database/connect');
// Logger
app.use(morgan('dev'));
// CORS
app.use(cors());
app.use(bodyParser.json({limit: "52428800"}));
app.use(bodyParser.urlencoded({limit: "52428800", extended: true, parameterLimit:50000}));
app.use(express.json());
app.use(express.json({ extended: false }));

app.get('/', async (req, res) => {
    res.json({message: "Hello World!"});
});

//routes




app.listen(port, () => console.log(`Server running on port ${port}`));