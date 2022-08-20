import Joi from "joi";

const loginUserSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export default async (req, res, next) => {
  try {
    await loginUserSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      message: "Error de logeo al registrar usuario",
      error,
    });
  }
};
