const Todo = require("../model/todos");

exports.findAllTodo = async function (req, res) {
  const todos = await Todo.find({});
  res.render("index", {
    layout: "layouts/mainLayout",
    todos,
  });
};

exports.addTodoRoutes = function (req, res) {
  res.render("addtask", {
    title: "Add Task",
    layout: "layouts/mainLayout",
  });
};

exports.addTodo = async function (req, res) {
  const todos = await Todo.find({});
  const duplicateTodos = todos.find(
    (todo) => todo.GoMyCode.toLowerCase() === req.body.GoMyCode.toLowerCase()
  );

  if (duplicateTodos) {
    res.render("addtask", {
      title: "Add Task",
      layout: "layouts/mainLayout",
      error: "Error!",
    });
    return false;
  } else {
    Todo.insertMany(req.body, function (err, result) {
      res.redirect("/");
    });
  }
};

exports.editTodoRoutes = async function (req, res) {
  const todo = await Todo.findById(req.params.id);
  res.render("taskedit", {
    title: "Edit Task",
    layout: "layouts/mainLayout",
    todo,
  });
};

exports.editTodo = async function (req, res) {
  const todos = await Todo.find({});
  const duplicateTodos = todos.find(
    (todo) => todo.GoMyCode.toLowerCase() === req.body.GoMyCode.toLowerCase()
  );

  if (duplicateTodos) {
    res.render("taskedit", {
      title: "Edit Task",
      layout: "layouts/mainLayout",
      error: "Error!",
      todo: req.body,
    });
    return false;
  } else {
    Todo.findByIdAndUpdate(req.body._id, req.body).then((result) => {
      res.redirect("/");
    });
  }
};

exports.deleteTodo = function (req, res) {
  Todo.findByIdAndDelete(req.body._id).then((result) => {
    res.redirect("/");
  });
};
