const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
require("express-async-errors");
const morgan = require("morgan");
const { errorHandler } = require("./middleware/error-handler");
const { NotFoundError } = require("./errors");

const productsRouter = require("./routes/products");
const categoriesRouter = require("./routes/categories");
const usersRouter = require("./routes/users");

module.exports = function app() {
  const app = express();
  app.use(cors());
  app.use(json());

  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }

  app.use("/api/products", productsRouter);
  app.use("/api/categories", categoriesRouter);
  app.use("/api/user", usersRouter);

  app.all("*", async (req, res) => {
    console.log("NotFound");
    throw new NotFoundError();
  });

  app.use(errorHandler);

  return app;
};
