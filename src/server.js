import express from "express";
import configViewEngine from "./configs/ViewEngine";
require ('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

console.log("port", port);
configViewEngine(app)


app.get('/', (req, res) => {
  res.render('index.ejs');
})

app.get('/about', (req, res) => {
    res.send('Hello World âsdasdasds !')
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})