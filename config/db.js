const mongoose=require ('mongoose');


require ('dotenv').config();


const connectDB=async()=>{


    try{
        await mongoose.connect(process-env.MONGO_URI,{
            useNewUrlParser: true,
            useunifiedtopology:true,
        })
        console.log("mongoDB Connected....");
    }catch (error){
        console.error(error.message);
        process.exit()
    };
}


module.exports=connectDB;