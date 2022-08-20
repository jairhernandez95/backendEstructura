import mongoose from "mongoose";

const schema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  genre: {
    type: String,
  },
  category: {
    type: String,
  },
  language: {
    type: String,
  },
  editorial: {
    type: String,
  },
  printingDate: {
    type: Number,
  },
  pages: {
    type: Number,
  },
  isbn: {
    type: String,
  },
  cover: {
    type: String,
  },
});

export default mongoose.model("Book", schema);
