const mongoose = require("mongoose");

// const connectToDb = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log("server is connected to database")
//     } catch (err) {
//         console.error(err);
//     }
// }

async function connectToDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("server is connected to database")
    } catch (err) {
        console.error(err);
    }
}



module.exports = connectToDb;