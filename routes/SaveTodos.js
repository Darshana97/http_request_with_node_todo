const { Router } = require("express");
const { model } = require("mongoose");
const { check, validationResult } = require("express-validator");

const todoList = model("todos");

const router = Router();

// router.post("/add", async (req, res) => {
//   try {
//     const myBody = req.body;
//     const todo = todoList(myBody);
//     await todo.save();
//     return res.json(todo);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

router.post(
  "/add",
  [
    check("fname", "First name is required").not().isEmpty(),
    check("lname", "Last name is required").not().isEmpty(),
  ],
  async (req, res) => {
    try {
      const myErrors = validationResult(req);

      if (!myErrors.isEmpty()) {
        return res.json({ error: myErrors.array() });
      }

      const myBody = req.body;
      const todo = todoList(myBody);
      await todo.save();
      return res.json(todo);
    } catch (error) {
      console.log(error.message);
    }
  }
);

module.exports = router;
