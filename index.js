const express = require("express");
const expressLayouts = require("express-ejs-layouts");
// const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
// app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(expressLayouts);

// app.use(bodyParser.json());
// Rutas para la web
app.use("/", require("./router/router"));

app.listen(3000, () => {
  console.log("Server is running on port : http://localhost:3000 ");
});
