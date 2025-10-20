const express= require('express')
const router=express.Router()
const student=require('../models/student')


//Get all students
router.get('/', async (req, res) => { 

    try{
        const students=await Student.find();
        res.json(students)

    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// create a new student

router.post("/", async(req, res)=> { 
     const{name,age,email}=req.body
     try{
         const student=new Student({name, age, email});
         const saved=await Student.save();
          res.status(201).json(saved)

     }catch(error){
        res.status(400).json({message:error.message})
     }
    })

//update student by id (route parameter that is unique)

router.put("/", async(req, res)=> {
    try{
        const students=await Student.findByIdAndUpdate;
        req.params.id,
        req.body,{new:true}
    }catch(error){
        res.status(400).json({message:error.message});
    }
    })
    

    // delete student by id
router.delete('/:id', async(req, res)=> {
    try{
        await Student.findByIdAndDelete
        (req.params.id)
         res.json({ message: 'Student deleted' })
    }catch(error){
        res.status(500).json({message:error.message})
    }
});


    module.exports=router;