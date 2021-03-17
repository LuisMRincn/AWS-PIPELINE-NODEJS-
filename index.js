const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("./Routes/users"))

app.get("/", (req, res) => {
    res.send({ message: "YOUR API IS WORKING!", code: 200 });
  });
  
app.listen('3001', () => {
    console.log("Esta listo, en el puerto 3001")
})