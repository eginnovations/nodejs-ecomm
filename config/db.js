const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || "mongodb://127.0.0.1/nodejs-ecommerce";
    const options = {
      autoIndex: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      user: process.env.MONGO_USER || '',
      pass: process.env.MONGO_PASS || '',
    };
    console.log('MongoDB connection details, URL:', uri);
    await mongoose.connect(uri, options);
    mongoose.connection;
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (e) {
    console.error('MongoDb connection error', e);
  }
};

module.exports = connectDB;
