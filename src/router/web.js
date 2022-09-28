import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomepage);
  router.get("/details/user/:id", homeController.getDetailPage);
  router.post("/create-new-user", homeController.createNewUser);
  router.post("/delete-user", homeController.deleteUser);
  router.get("/about/", (req, res) => {
    res.send("We are Dalavina");
  });
  router.get("/show-edit-user/:id", homeController.getDetailPageEdit);
  router.post("/edit-user", homeController.editUser);

  return app.use("/", router);
};

module.exports = initWebRoute;
