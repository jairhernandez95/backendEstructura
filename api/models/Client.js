import mongoose from "mongoose";

const schema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  birthdate: Date,
  age: Number,
  address: String,
  references: [{
    name: String,
    phone: Number
  }],
  email: String,
  phone: Number
})

export default mongoose.model('Client', schema)