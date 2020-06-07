import express from "express";
import routes from "./routes";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

class App {
  constructor() {
    this.server = express();
    this.connectDatabase();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }
  routes() {
    this.server.use(routes);
  }
  async connectDatabase() {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Successfully connected to mongo");
    } catch (error) {
      console.log(`error to connect to Atlas DB: ${error}`);
    }
  }
}

export default new App().server;
