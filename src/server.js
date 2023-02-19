import express from "express";
import configViewEngine from "./configs/ViewEngine";
import {adminWebRoute, initWebRoute} from "./routes/web";


// config env
require ('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

// config view engine
configViewEngine(app)

// config web route
initWebRoute(app);
adminWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})