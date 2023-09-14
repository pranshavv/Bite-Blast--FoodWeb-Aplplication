// const mongoose = require('mongoose');

// const dotenv = require('dotenv');

// // Load environment variables from .env file
// dotenv.config();

// mongoose.set('strictQuery', true);
// const mongoDB = async () => {
//     const mongoURL = process.env.mongoURL; // Access the 'mongoURL' environment variable
//     const port = process.env.port; // Access the 'port' environment variable
//     if (!mongoURL || !port) {
//         console.error("One or more environment variables are not defined.");
//         process.exit(1);
//       }
      
//       const mongoDB = async () => {
//         try {
//           await mongoose.connect(mongoURL, { useNewUrlParser: true });
//           console.log("Connected");
//             const fetched_data = await mongoose.connection.db.collection("Food_items");
//             fetched_data.find({}).toArray(async function (err, data) {
//                 const foodCategory = await mongoose.connection.db.collection("FoodCategory");
//                 foodCategory.find({}).toArray(async function (err, catdata) {
//                     if (err) console.log(err);
//                     else{
//                         global.Food_items = data;
//                         global.foodCategory = catdata;
//                     }
//                 })

//             })
//         }

//     });
// }
// module.exports = mongoDB; 

const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

mongoose.set('strictQuery', true);

const mongoDB = async () => {
  const mongoURL = process.env.mongoURL; // Access the 'mongoURL' environment variable

  if (!mongoURL) {
    console.error("The 'mongoURL' environment variable is not defined.");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoURL, { useNewUrlParser: true });
    console.log("Connected");

    const fetched_data = await mongoose.connection.db.collection("Food_items");
    fetched_data.find({}).toArray(async function (err, data) {
      const foodCategory = await mongoose.connection.db.collection("FoodCategory");
      foodCategory.find({}).toArray(async function (err, catdata) {
        if (err) console.error(err);
        else {
          global.Food_items = data;
          global.foodCategory = catdata;
        }
      });
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
