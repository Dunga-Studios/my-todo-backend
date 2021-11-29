const todos = require("./todos")


const express = require("express")
const app = express()

const routes = () =>  {
  return app.use("/", todos);
}

module.exports = routes