const express = require('express');
const userRouter = require('./routes/users.router');
const { userModel } = require('./models/user.model');
const mongoose = require('mongoose');
const { studentModel } = require('./models/student.model');
const { courseModel } = require('./models/course.model');
const { orderModel } = require('./models/order.model');
const exphbs = require('express-handlebars');
const mongoosePaginate = require('mongoose-paginate-v2');
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

    /*     let student = await studentModel.findById({ _id: '64ef2626c5ba1621896ef079' })
        console.log(JSON.stringify(student, null, '\t'))
    
        student.courses.push({ course: "64ef27c60d79e5edbf776ad7" })
    
        let result = await studentModel.updateOne({ _id: '64ef2626c5ba1621896ef079' }, student)
        console.log(result) */

    console.log("Conectado a la base de datos")



    /*     let result = await orderModel.insertMany(
            [
                { name: "Muzzarella", size: "medium", price: 1000, quantity: 20, date: "2023-09-01" },
                { name: "Especial", size: "large", price: 1500, quantity: 10, date: "2023-09-02" },
                { name: "Argentina", size: "small", price: 1800, quantity: 30, date: "2023-09-03" },
                { name: "4 quesos", size: "medium", price: 2000, quantity: 50, date: "2023-09-04" },
                { name: "Primavera", size: "small", price: 800, quantity: 10, date: "2023-09-04" },
    
            ]
        )
    
        console.log(result) */
    /*     let orders = await orderModel.aggregate([
            { $match: { size: "medium" } },
            { $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } } },
            { $sort: { totalQuantity: -1 } },
            { $group: { _id: 1, orders: { $push: "$$ROOT" } } },
            {
                $project: {
                    "_id": 0,
                    orders: "$orders"
                }
            },
            {
                $merge: {
                    into: "reports"
                }
            }
        ]) */
    /* 
        let users = await userModel.paginate({ gender: "Female" }, { limit: 20, page: 1 })
    
        console.log(users) */

}
environment();


//HANDS ON LABS
/* 
app.engine('handlebars', exphbs.engine());
app.set('views', './src/views');
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: true }));

app.get('/students', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = 10; // Número de estudiantes por página


    const Estudiante = mongoose.model(
        'Estudiante',
        studentModel.schema.plugin(mongoosePaginate)
    );
    const options = {
        page,
        limit: pageSize,
    };

    try {
        const result = await Estudiante.paginate({}, options);
        res.render(
            'students.handlebars'
            , {
                estudiantes: result.docs,
                currentPage: page,
                totalPages: result.totalPages,
            });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error interno del servidor');
    }
}); */



app.use("/api/users", userRouter);


