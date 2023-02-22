import express from "express";
import configViewEngine from "./configs/ViewEngine";
import {adminWebRoute, initWebRoute} from "./routes/web";


// config env
require ('dotenv').config()

const app = express();
const port = 3000;

// config app như sau
// => mục đích để client có thể gửi data cho server và
// có thể nhận được data 1 cách dễ dàng
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// config view engine
configViewEngine(app)

// config web route
initWebRoute(app);
adminWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})