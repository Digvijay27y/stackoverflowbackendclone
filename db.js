const mongoose = require("mongoose");

const url =
  "mongodb+srv://Digvijay:pYJyJw5TCsKp4iq2@cluster0.ewmhj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
