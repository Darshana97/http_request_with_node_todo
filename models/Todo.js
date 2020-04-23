const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
});

module.exports = model("todos", todoSchema);
