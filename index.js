const express = require("express");

const app = express();

require("./models/Todo");

const connectDB = require("./config/db");

const getTodos = require("./routes/GetTodos");
const getTodo = require("./routes/GetTodo");
const saveTodo = require("./routes/SaveTodos");
const deleteTodo = require("./routes/DeleteTodos");
const editTodo = require("./routes/EditTodos");

connectDB();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});

app.use(getTodos);
app.use(getTodo);
app.use(saveTodo);
app.use(deleteTodo);
app.use(editTodo);
