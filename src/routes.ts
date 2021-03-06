import { Router } from "express";
import multer from "multer";
import { ensureAuth } from "./middleware/ensureAuth";
import { upload } from "./utils/uploadImage";
import { AuthenticateUserController } from "./useCases/AuthenticateUser/AuthenticateUserController";
import { CreateProductController } from "./useCases/CreateProduct/CreateProductController";
import { CreateTransactionController } from "./useCases/CreateTransaction/CreateTransactionController";
import { CreateUserController } from "./useCases/CreateUser/CreateUserController";
import { GetTransactionPriceController } from "./useCases/GetTransactionPrice/GetTransactionPriceController";
import { ListProductsController } from "./useCases/ListProducts/ListProductsController";
import { ListTransactionsController } from "./useCases/ListTransactions/ListTransactionsController";
import { ListUsersController } from "./useCases/ListUsers/ListUsersController";
import { UpdateProductImageController } from "./useCases/UpdateProductImage/UpdateProductImageController";

const routes = Router();

const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();
const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const authenticateUserController = new AuthenticateUserController();
const getTransactionPriceController = new GetTransactionPriceController();
const createTransactionController = new CreateTransactionController();
const listTransactionsController = new ListTransactionsController();
const updateProductImageController = new UpdateProductImageController();

routes.post("/users", createUserController.handle);
routes.get("/users", listUsersController.handle);

routes.post("/auth", authenticateUserController.handle);

routes.get("/products", ensureAuth, listProductsController.handle);
routes.post("/products", ensureAuth, createProductController.handle);

const uploadImage = multer(upload());

routes.patch(
  "/products/:productId/image",
  ensureAuth,
  uploadImage.single("productImage"),
  updateProductImageController.handle
);

routes.post(
  "/transactions/price",
  ensureAuth,
  getTransactionPriceController.handle
);
routes.post("/transactions", ensureAuth, createTransactionController.handle);
routes.get("/transactions", ensureAuth, listTransactionsController.handle);

export { routes };
