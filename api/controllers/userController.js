import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jwt-simple";
import config from "../config/index.js";

const register = async (req, res) => {
  try {
    const encryptedPassword = await bcrypt.hash(req.body.password, 4);
    req.body.password = encryptedPassword;
    const user = await User.create(req.body);
    user.password = undefined;
    return res.json({
      message: "Usuario creado",
      data: { user },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Ya existe un usuario registrado con ese correo",
      });
    } else {
      return res.status(500).json({
        message: "Ocurrió un error al registrar usuario",
        error,
      });
    }
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.status(400).json({
        message: "Usuario no encontrado",
      });
    }
    const passCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!passCorrect) {
      return res.status(401).json({
        message: "Credenciales invalidas",
      });
    }
    const expirationDate = new Date();
    expirationDate.setMinutes(today.getMinutes() + 3);

    const payload = {
      userID: user.id,
      expirationDate,
    };
    const token = jwt.encode(payload, config.jwt.secret);
    return res.json({
      message: "Login correcto",
      data: { token },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrió un error al hacer login",
      error,
    });
  }
};

export { login, register };
