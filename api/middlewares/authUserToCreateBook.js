import jwt from "jwt-simple";
import config from "../config/index.js";
import User from "../models/User.js";

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).json({
        message: "Cabecera Authorization faltante",
      });
    }
    const payload = jwt.decode(token, config.jwt.secret);
    const user = await User.findById(payload.userID);
    if (!user) {
      return res.status(401).json({
        message: "Token invalido",
      });
    }
    const expirationDate = Date.parse(payload.expirationDate)
    if(expirationDate.getTime() < new Date().getTime()) {
      return res.status().json({
        message: "El token ha expirado"
      })
    }
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Token invalido",
      error,
    });
  }
};

export default isAuth;
