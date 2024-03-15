import mongoose from 'mongoose';

const connection = async()=>{
    try{
        const dbName = '';
        const conn=await mongoose.connect(" ",
       { useNewUrlParser : true,
        useUnifiedTopology : true,
        useCreateIndex : true,
       }
    );
    console.log("Connected to MongoDB");
} catch(error){
    console.error("Error connecting to MongoDB");
    process.exit(1)
}

}