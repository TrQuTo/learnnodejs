import express from "express";
import homeController from '../controller/homeController';
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/about', (req, res) =>{
        res.send('We are Dalavina')
    })

    return app.use('/', router)
}

module.exports = initWebRoute;
