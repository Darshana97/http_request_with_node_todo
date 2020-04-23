const { Router } = require("express");

const { model } = require("mongoose");

const todoList = model("todos");

const router = Router();
router.get("/getid/:idNo", async (req, res) => {
  const myId = req.params.idNo;
  try {
    const todo = await todoList.findById(myId);
    if (!todo) {
      return res.json("Todo not found");
    }
    return res.json(todo);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
