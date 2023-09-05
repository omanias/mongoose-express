const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const studentCollection = "students";


const studentSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    courses: {
        type: [
            {
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "courses"
                }
            }
        ],
        default: []
    }
});


studentSchema.pre("find", function () {
    this.populate("courses.course")
})

studentSchema.plugin(mongoosePaginate);
const studentModel = mongoose.model(studentCollection, studentSchema);

module.exports = { studentModel };