import Joi from "joi";

const createBookSchema = Joi.object({
  author: Joi.string().required(),
  title: Joi.string().required(),
  genre: Joi.string().required(),
  category: Joi.string().required(),
  language: Joi.string().required(),
  editorial: Joi.string().required(),
  printingDate: Joi.number().required(),
  pages: Joi.number().required(),
  isbn: Joi.string().required(),
  cover: Joi.string().required(),
});

export default async (req, res, next) => {
  try {
    await createBookSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      message: "Error de validación",
      error,
    });
  }
};
