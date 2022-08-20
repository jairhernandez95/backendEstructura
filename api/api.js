import express from "express";
import userRoutes from "./routes/userRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";

const api = express();

// TODO configurar middlewares
api.use(express.json());

api.get("/status", (_, res) => {
  return res.json({
    message: "API en línea y funcionando",
  });
});

// TODO acá se registran las rutas

api.use(userRoutes);
api.use(bookRoutes);
api.use(clientRoutes);

export default api;
