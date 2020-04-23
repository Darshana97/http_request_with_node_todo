const { Router } = require("express");

const { model } = require("mongoose");
const todoList = model("todos");

const router = Router();

router.put("/edit/:id", async (req, res) => {
  const myBody = req.body;
  try {
    await todoList.updateOne({ _id: req.params.id }, { $set: myBody });
    const todo = await todoList.findById(req.params.id);
    return res.json(todo);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
