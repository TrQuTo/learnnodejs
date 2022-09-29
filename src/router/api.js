import express from "express";
import apiController from "../controller/apiController";

let router = express.Router();

const initAPIRoute = (app) => {
  router.get("/users", apiController.getAllUsers); //Method get --> READ data
  router.post("/create-user", apiController.createUserAPI); //Method post --> CREATE data
  router.put("/edit-user", apiController.editUserAPI); //Method put --> EDIT data
  router.delete("/delete-user/:id", apiController.deleteUserAPI); //Method delete --> DELETE data
  return app.use("/api/v1/", router);
};

export default initAPIRoute;
