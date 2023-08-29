const express = require('express');
const userRouter = require('./routes/users.router');
const mongoose = require('mongoose');
const app = express();
const port = 8080;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.json());

mongoose.connect('liga') // Enlace otorgado por Mongo Atlas
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(error => {
        console.error('Error connecting to the database:', error);
    });


app.use("/api/users", userRouter);
