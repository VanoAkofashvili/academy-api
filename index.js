const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
require("express-async-errors");
const morgan = require("morgan");

function start() {
  const app = express();
  app.use(cors());
  app.use(json());

  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }

  app.all("*", async (req, res) => {
    throw new Error("");
  });
}

start();
