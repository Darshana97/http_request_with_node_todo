const { Router } = require("express");

const { model } = require("mongoose");
const todoList = model("todos");
const router = Router();

router.delete("/del/:id", async (req, res) => {
  try {
    await todoList.findByIdAndDelete(req.params.id);
    return res.json({ msg: "Todo Deleted" });
    
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
