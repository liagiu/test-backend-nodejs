import mongoose from "mongoose";
import Product from "../models/Product.js";

class ProductController {
  async index(res, req) {
    await Product.find({}, (err, products) => {
      if (err) {
        res.send(err);
      }
      res.json(products);
    });
  }

  async read(res, req) {
    await Product.find({ _id: req.params.id }, (err, product) => {
      if (err) {
        res.send(err);
      }
      res.json(product);
    });
  }

  async create(res, req) {
    const newProduct = await new Product(req.body);

    newProduct.save((err) => {
      if (err) {
        res.send(err);
      }
      res.status(201).send({
        message: "The product was stored successfully",
      });
    });
  }

  async update(res, req) {
    await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
      (err) => {
        if (err) {
          res.send(err);
        }
        res.status(200).send({
          message: "The product was updated successfully",
        });
      }
    );
  }

  async delete(res, req) {
    await Product.delete({ _id: req.params.id }, (err) => {
      if (err) {
        res.send(err);
      }
      res.status(200).send({
        message: "The product was deleted successfully",
      });
    });
  }
}

export default new ProductController();
