const mongoose = require('mongoose')


const uri = "mongodb+srv://kaya:Kaya20051028@cluster0.vi1hdiu.mongodb.net/?retryWrites=true&w=majority"

const connect = async () => {
    try { 
        await mongoose.connect(uri);
        console.log("Successfully connected")
    }
    catch(err) {
        console.log(err)
    }
}

module.exports = connect;