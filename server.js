const express = require("require");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//parse requests of content-type - application/json

app.use(bodyParser.json());

//parse requests of content-type - application/json
app.use(bodeyParser.urlencoded({extended: true}));

//simple route
app.get('/', (req, res) => {
  res.json({message: "Welcome to Delattre's applications"})
})
