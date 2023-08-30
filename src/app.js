const express = require('express');
const userRouter = require('./routes/users.router');
const { userModel } = require('./models/user.model');
const mongoose = require('mongoose');
const { studentModel } = require('./models/student.model');
const { courseModel } = require('./models/course.model');
const app = express();
const port = 8080;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.json());

/* mongoose.connect('mongodb+srv://omanias:123456@cluster0.3lmci0d.mongodb.net/?retryWrites=true&w=majority') // Enlace otorgado por Mongo Atlas
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(error => {
        console.error('Error connecting to the database:', error);
    });
 */
const environment = async () => {
    await mongoose.connect("mongodb+srv://omanias:123456@cluster0.3lmci0d.mongodb.net/?retryWrites=true&w=majority")
    /*  let response = await userModel.find({ first_name: "Celia" }).exec();
     console.log(response); */ // Ejemplo de consulta

    /*     await studentModel.create({
            first_name: "Hilda",
            last_name: "Coruño",
            email: "hilda@coruño.com",
            gender: "Female"
        }) */

    /*   await courseModel.create({
          title: "Curso de NodeJS",
          description: "Curso de NodeJS",
          difficulty: 1,
          topics: ["NodeJS", "Express", "MongoDB"],
          professor: "Omar Manias",
      }) */

    let student = await studentModel.findById({ _id: '64ef2626c5ba1621896ef079' })
    console.log(JSON.stringify(student, null, '\t'))

    student.courses.push({ course: "64ef27c60d79e5edbf776ad7" })

    let result = await studentModel.updateOne({ _id: '64ef2626c5ba1621896ef079' }, student)
    console.log(result)

}
environment();


app.use("/api/users", userRouter);


