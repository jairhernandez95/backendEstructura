import Client from "../models/Client.js";

const getAllClients = async (_, res) => {
  try {
    const clients = await Client.find();
    return res.json({
      message: "Lista de clientes encontrados con getAllClients",
      data: clients,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener la lista de clientes",
      error,
    });
  }
};
const createClient = async (req, res) => {
  try {
    const client = await Client.create(req.body);
    return res.json({
      message: "Cliente creado existosamente con createClient",
      data: client,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear cliente",
      error,
    });
  }
};
const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findById(id);
    return res.json({
      message: "Cliente obtenido por getClientById",
      data: client,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener el cliente",
      error,
    });
  }
};
const updateClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByIdAndUpdate(id, req.body, { new: true });
    return res.json({
      message: "Cliente actualizado correctamente por updateClienteById",
      data: client,
    });
  } catch (error) {
    return res.status(500).json({
      message: "",
      error,
    });
  }
};
const deleteClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedClient = await Client.findByIdAndDelete(id);
    return res.json({
      message: "Cliente borrado exitosamente con deleteClienteById",
      data: deletedClient,
    });
  } catch (error) {
    return res.status(500).json({
      message: "",
      error,
    });
  }
};

export {
  getAllClients,
  createClient,
  getClientById,
  updateClientById,
  deleteClientById,
};
