// use dotenv while in informal env
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const express = require("express");
const engine = require("express-handlebars").engine;

const app = express();
const PORT = process.env.PORT || 3000;

const routes = require("./routes");
require("./config/mongoose"); // mongoose

// setting template engine
app.engine(
  "hbs",
  engine({
    layoutsDir: "views/layouts", // directory to handlebars files
    defaultLayout: "main",
    extname: "hbs", // specify the file extension as .hbs
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);
app.set("view engine", "hbs");

// middleware
app.use(express.urlencoded({ extended: true }));

// routes
app.use(routes);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
