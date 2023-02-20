import express from "express";
import homeController from "../controller/HomeController";
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.homeController);

    router.get('/detail/user/:userId', homeController.getDetailPage);

    router.get('/about', (req, res) => {
        res.send('Hello World âsdasdasds !')
    });

    return app.use('/', router);
}

const adminWebRoute = (app) => {
    router.get('/', (req, res) => {
        res.render('index.ejs');
    });

    router.get('/about', (req, res) => {
        res.send('Hello World âsdasdasds !')
    });

    return app.use('/admin', router);
}

export {
    initWebRoute,
    adminWebRoute
}