import mongoose from "mongoose";
import Product from "../models/Product.js";

class ProductController {
  async index(req, res, next) {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (err) {
      next(err);
    }
  }

  async read(req, res, next) {
    try {
      const product = await Product.find({ _id: req.params.id });
      res.json(product);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      await Product.create(req.body);

      res.status(201).send({
        message: "The product was created successfully",
      });
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      await Product.findOneAndUpdate({ _id: req.params.id }, req.body);

      res.status(200).send({
        message: "The product was updated successfully",
      });
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      await Product.findOneAndDelete({ _id: req.params.id });

      res.status(200).send({
        message: "The product was deleted successfully",
      });
    } catch (err) {
      next(err);
    }
  }
}

export default new ProductController();
