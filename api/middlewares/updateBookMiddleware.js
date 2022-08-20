import Joi from "joi";

const updateBookSchema = Joi.object({
  author: Joi.string().optional(),
  title: Joi.string().optional(),
  genre: Joi.string().optional(),
  category: Joi.string().optional(),
  language: Joi.string().optional(),
  editorial: Joi.string().optional(),
  printingDate: Joi.number().optional(),
  pages: Joi.number().optional(),
  isbn: Joi.string().optional(),
  cover: Joi.string().optional(),
});

export default async (req, res, next) => {
  try {
    await updateBookSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      message: "Error de validación",
      error,
    });
  }
};
