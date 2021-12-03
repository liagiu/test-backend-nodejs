import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import db from "./database/config.js";
import mongoose from "mongoose";

class App {
  constructor() {
    this.server = express();
    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    mongoose.connect(db.uri, { useNewUrlParser: true });
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
