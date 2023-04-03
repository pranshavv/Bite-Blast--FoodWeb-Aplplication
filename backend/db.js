const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://foodmern:pranshav04@cluster0.yzym85l.mongodb.net/Foodmern?retryWrites=true&w=majority'
mongoose.set('strictQuery', true);
const mongoDB = async () => {
    await mongoose.connect(mongoURL, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("Connected");
            const fetched_data = await mongoose.connection.db.collection("Food_items");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("FoodCategory");
                foodCategory.find({}).toArray(async function (err, catdata) {
                    if (err) console.log(err);
                    else{
                        global.Food_items = data;
                        global.foodCategory = catdata;
                    }
                })

            })
        }

    });
}
module.exports = mongoDB; 