const mongoose = require("mongoose");

connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MODEL_URI);
        console.log("server is connected to database")
    } catch (err) {
        console.log(err)
    }
}


module.exports = connectToDb;