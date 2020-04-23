const { Router } = require("express");
const { model } = require("mongoose");

const todoList = model("todos");
const router = Router();

router.get("/get", async (req, res) => {
  try {
    const todo = await todoList.find();
    if (!todo) {
      return res.status(204).json("todo not found");
    }
    return res.json(todo);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
