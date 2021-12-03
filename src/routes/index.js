import { Router } from "express";
import ProductController from "../controllers/ProductController.js";

const routes = new Router();

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.read);
routes.post("/products", ProductController.create);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.delete);

export default routes;
