const connectDB = require("./server/database/database");
const dotenv = require("dotenv").config({ path: "config.env" });
const methodOverride = require("method-override");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = process.env.PORT || 8080;

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/public/img", express.static("./public/img"));
app.use(expressLayouts);
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
connectDB();
app.use(require("./server/routes/routes"));

app.listen(port, function () {
  console.log(`Server is listening on http://localhost:${port}`);
});
