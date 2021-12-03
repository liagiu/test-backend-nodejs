import mongoose from "mongoose";
import Product from "../models/Product.js";

class ProductController {
  async index(req, res) {
    const products = await Product.find({});

    res.json(products);
  }

  async read(req, res) {
    //TODO
  }

  async create(req, res) {
    const product = await Product.create(req.body);

    res.status(201).send({
      message: "The product was created successfully",
    });
  }

  async update(req, res) {
    //TODO
  }

  async delete(req, res) {
    //TODO
  }
}

export default new ProductController();
