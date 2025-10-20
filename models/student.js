const mongoose= require('mongoose');

//define schema

const studentSchema = new mongoose.schema({


name:{type: String, required: true},
age:{type: Number, required:true},
email:{type:String, unique:true, required:true}
},{timestamps:true});

//create the model (represents collections aka tables)
const student=mongoose.model("student", studentSchema)





module.exports=student;

