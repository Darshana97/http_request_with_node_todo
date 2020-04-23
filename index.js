const express = require("express");

const app = express();

const todoList = require("./models/Todo");

app.use(todoList);

const connectDB = require("./config/db");

connectDB();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
