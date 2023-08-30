const { Router } = require('express'); //Importamos el método Router de express
//Importamos el modelo
const { userModel } = require('../models/user.model');

const router = Router();

router.get('/', async (req, res) => { //Funcion asíncrona para trabajar con Mongoose
    try {
        let users = await userModel.find();
        res.send({ result: "success", payload: users });
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    let { first_name, last_name, email, gender } = req.body;

    if (!first_name || !last_name || !email || !gender) {
        res.send({ status: "error", error: "Missing body params" });
    }

    let result = await userModel.create({ first_name, last_name, email, gender });
    res.send({ result: "success", payload: result });
});

router.put('/:uid', async (req, res) => {
    let { uid } = req.params;

    let userToReplace = req.body;
    if (!userToReplace.first_name || !userToReplace.last_name || !userToReplace.email || userToReplace.gender) {
        res.send({ status: "error", error: "Missing body params" });
    }
    let result = await userModel.updateOne({ _id: uid }, userToReplace);
    res.send({ result: "success", payload: result });
});


router.delete('/:uid', async (req, res) => {
    let { uid } = req.params;
    let result = await userModel.deleteOne({ _id: uid });
    res.send({ result: "success", payload: result });
});


module.exports = router;