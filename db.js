// const mongoose = require('mongoose');
// require('dotenv').config()

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://savitar123:<password>@cluster0.1661ihf.mongodb.net/?retryWrites=true&w=majority', {
//       // useNewUrlParser: true,
//       // useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('MongoDB connection failed', error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

// //  mongodb+srv://admin:admin@roshancluster.2d9t729.mongodb.net/mycontacts-backend?retryWrites=true&w=majority
// // mongodb+srv://admin:<password>@roshancluster.2d9t729.mongodb.net/?retryWrites=true&w=

const mongoose = require("mongoose")
 
const connectDB = async () =>{
    try {
        const connect = await mongoose.connect("mongodb://lokesh123:lokesh123@ac-tigf8fh-shard-00-00.yjzuyh4.mongodb.net:27017,ac-tigf8fh-shard-00-01.yjzuyh4.mongodb.net:27017,ac-tigf8fh-shard-00-02.yjzuyh4.mongodb.net:27017/?ssl=true&replicaSet=atlas-o9j7rt-shard-0&authSource=admin&retryWrites=true&w=majority");
        console.log("Database Connected", connect.connection.host, connect.connection.name)
    } catch (error) {
       console.log(error);
       process.exit(1)        
    }
}
 
module.exports = connectDB;