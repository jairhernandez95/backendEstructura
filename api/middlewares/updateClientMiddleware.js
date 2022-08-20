import Joi from "joi";

const updateClientSchema = Joi.object({
  name: Joi.string().optional(),
  birthdate: Joi.date().optional(),
  age: Joi.number().optional(),
  address: Joi.string().optional(),
  references: Joi.array().items(Joi.string(), Joi.string()),
  email: Joi.string().optional(),
  phone: Joi.string().optional(),
});

export default async (req, res, next) => {
  try {
    await updateClientSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      message: "Error de validación",
      error,
    });
  }
};
