import mongoose from "mongoose";
import config from "../config/index.js";

const database = mongoose.connection;

database.on("connecting", () => {
  console.log("Intentando conectar a la base de datos 🟡")
})
database.on("connected", () => {
  console.log("Se ha conectado a la base de datos 🟢")
})
database.on("disconnected", () => {
  console.log("Error en la conexión con la base de datos 🔴")
})

export default () => {
  mongoose.connect(config.database.uri)
};