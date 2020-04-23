const mongoose = require("mongoose");

const mongoUrl =
  "mongodb+srv://darshana:achi@cluster0-cqpnt.azure.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
