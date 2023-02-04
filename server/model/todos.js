const mongoose = require("mongoose");

const Todo = mongoose.model("Todo", {
  GoMyCode: {
    type: String,
    required: true,
  },
});

module.exports = Todo;
