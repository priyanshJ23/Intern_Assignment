const mongoose = require("mongoose");
exports.connect = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
        useUnifiedTopology:true,
        useNewUrlParser: true,
   
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
    });
};