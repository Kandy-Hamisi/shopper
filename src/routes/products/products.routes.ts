import { Router } from 'express';
import {createProduct, deleteProduct, getSingleProduct, listProducts, updateProduct} from "./products.controller";

const router = Router();

router.route("/").get(listProducts);
router.route("/").post(createProduct);
router.route("/:id").get(getSingleProduct);
router.route("/:id").put(updateProduct);
router.route("/:id").delete(deleteProduct);

export default router;