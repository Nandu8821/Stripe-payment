const mongoose = require("mongoose");

const connectDb=async()=>{
  try{
    // I have create this account only for this project that the reaon why i am providing the database but you can change it as well as per your requirement....
    await mongoose.connect("mongodb+srv://meenanandu016:VouQgkfdHw1wDWTu@nanduapi.6raf9qf.mongodb.net/NanduAPI?retryWrites=true&w=majority")
    console.log("Database connected");
  }catch(error){
    console.log(`Error in connecting with database ${error}`)
  }
}
module.exports = connectDb