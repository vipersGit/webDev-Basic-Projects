const mongoose = require("mongoose");

// const connectToDb = () => {
//     mongoose.connect(process.env.MONGO_URI)
//         .then(() => {
//             console.log("server is connected to database");
//         })
//         .catch((e) => {
//             console.error(e);
//         })
// }

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("server is connected to database");
    } catch (err) {
        console.error(err);
    }

}


module.exports = connectToDb;