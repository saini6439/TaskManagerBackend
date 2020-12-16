let mongoose = require("mongoose");
let util = require("util");
const config = (require('../config.json')).mongodb

class Mongodb {
  constructor() {
    this.uri = "mongodb://localhost:27017/task-manager"
    this.init()
}
  init() {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      reconnectInterval: 500,
      poolSize: 5, 
      connectTimeoutMS: 10000, 
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      family: 4, // Use IPv4, skip trying IPv6
    };
    mongoose.connect(this.uri, options).then(
      () => {
        console.log("    MongoDB: Connection Successful");
      },
      (err) => {
        console.log("    MongoDB: Connection failed", err);
        process.exit(1);
      }
    );
    mongoose.set("useCreateIndex", true);
    mongoose.connection.on("error", (err) => {
      console.log("MongoDB:Error:", err);
    });
  }
}

module.exports = new Mongodb();