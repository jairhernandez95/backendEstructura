import Joi from "joi"

const createClientSchema = Joi.object({
  name: Joi.string().required(),
  birthdate: Joi.date().required(),
  age: Joi.number().required(),
  address: Joi.string().required(),
  references: Joi.array().items(Joi.string(), Joi.string()),
  email: Joi.string().required(),
  phone: Joi.string().required(),
})

export default async (req, res, next) => {
  try {
    await createClientSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      message: "Error de validación",
      error
    })
  }
}