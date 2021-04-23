const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./models")

let corsOption = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOption));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded);

app.get("/", (req, res) => {
    res.json({message: "Welcome!"})
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port 8080.')
});