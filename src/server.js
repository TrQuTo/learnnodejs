import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./router/web";
import connection from "./configs/connectDB";

require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
console.log("Check>>>>>>: ", port);

configViewEngine(app);
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening  at http://localhost:${port}`);
});
