import express from "express";
import {
  getAllBooks,
  createBook,
  getBookById,
  updateBookById,
  deleteBookById,
} from "../controllers/bookController.js";
import createBookMiddleware from "../middlewares/createBookMiddleware.js";
import updateBookMiddleware from "../middlewares/updateBookMiddleware.js";
import isAuth from "../middlewares/authUserToCreateBook.js";

const bookRoutes = express.Router();

bookRoutes.use("/books",isAuth);

bookRoutes
  .route("/books")
  .get(getAllBooks)
  .post(createBookMiddleware, createBook);
bookRoutes
  .route("/books/:id")
  .get(getBookById)
  .put(updateBookMiddleware, updateBookById)
  .delete(deleteBookById);

export default bookRoutes;
