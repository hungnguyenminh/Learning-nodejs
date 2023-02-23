import express from "express";
import ApiController from "../controller/ApiController";
import homeController from "../controller/HomeController";
let router = express.Router();

const initApiRoute = (app) => {
    router.get('/users', ApiController.getAllUser);
    router.post('/create-user', ApiController.createNewUser)
    router.put('/update-user', ApiController.updateUser)
    router.delete('/delete-user/:id', ApiController.deleteUser)
    return app.use('/api/v1/', router);
}

export {
    initApiRoute
}