import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./router/web";
import connection from "./configs/connectDB";
import initAPIRoute from "./router/api";

require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);
initWebRoute(app);
initAPIRoute(app);

app.listen(port, () => {
  console.log(`Example app listening  at http://localhost:${port}`);
});
