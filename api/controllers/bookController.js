import Book from "../models/Book.js";

const getAllBooks = async (_, res) => {
  try {
    const books = await Book.find();
    return res.json({
      message: "Libros encontrados por getAllBooks",
      data: books,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al buscar libros",
      data: error,
    });
  }
};
const createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    return res.json({
      message: "Libro creado con createBook",
      data: newBook,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear el libro",
      error,
    });
  }
};
const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.json({
      message: "Libro encontrado por getBookById",
      data: { book },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al buscar libro por ID",
      error,
    });
  }
};
const updateBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({
      message: "Libro actualizado por updateBookById",
      data: { updatedBook },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error el actualizar libro por id",
      error,
    });
  }
};
const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    return res.json({
      message: "Libro borrado correctamente",
      data: deletedBook,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al borrar libro por id",
      error,
    });
  }
};

export { getAllBooks, createBook, getBookById, updateBookById, deleteBookById };
