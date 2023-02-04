const express = require("express");
const {
  findAllTodo,
  addTodoRoutes,
  addTodo,
  editTodoRoutes,
  editTodo,
  deleteTodo,
} = require("../controller/controller");
const router = express.Router();
const Todo = require("../model/todos");

router.get("/", findAllTodo);
router.get("/addtask", addTodoRoutes);
router.post("/", addTodo);
router.get("/taskedit/:id", editTodoRoutes);
router.put("/", editTodo);
router.delete("/", deleteTodo);

// 404
router.use(function (req, res) {
  res.render("404", {
    title: "Error 404!",
    layout: "layouts/mainLayout",
  });
});

module.exports = router;
