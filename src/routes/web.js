import express from "express";
import homeController from "../controller/HomeController";
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.homeController);

    router.get('/detail/user/:id', homeController.getDetailPage);

    router.post('/create_user', homeController.createNewUser);
    router.post('/delete-user', homeController.deleteUser);
    router.get('/edit-user/:id', homeController.getEditPage)
    router.post('/update-user', homeController.updateUserInfo)
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