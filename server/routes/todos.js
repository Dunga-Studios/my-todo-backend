const express = require("express");
const router = express.Router();
const db = require("../database/query");

router.get("/todos", async (req, res) => {
  try {
    let result = await db.fetchTodos();
    res.json(result).status(200);
  } catch (error) {
    res.json({ error: "An Error Occurred" }).status(500);
  }
});

router.get("/todos/:id", async (req, res) => {
  try {
    let result = await db.fetchTodo(req.params.id);
    res.json(result).status(200);
  } catch (error) {
    res.json({ error: "An Error Occurred" }).status(500);
  }
});

router.post("/todos", async (req, res) => {
  try {
    // let title = req.body.title;
    // let notes = req.body.notes;
    // req.body = {title: "", notes: ""}
    let { title, notes } = req.body;
    let result = await db.createTodo({ title, notes });
    res.json({ success: "Todo was created succesfully" }).status(200);
  } catch (error) {
    console.log(error);
    res.json({ error: "An Error Occurred" }).status(500);
  }
});

router.put("/todos", async (req, res) => {
  try {
    let { id, title, notes } = req.body;
    let result = await db.updateTodos({ id, title, notes });
    res.json({ success: "Todo was updated succesfully" }).status(200);
  } catch (error) {
    console.log(error);
    res.json({ error: "An Error Occurred" }).status(500);
  }
});

router.delete("/todos/:id", async (req, res) => {
  try {
    // let {id} = req.params
    let id = req.params.id;
    await db.deleteTodos(req.params.id);
    res.json({ success: `Todo with id ${id} was deleted  succesfully` })
      .status(200);
  } catch (error) {
    console.log(error);
    res.json({ error: "An Error Occurred" }).status(500);
  }
});

module.exports = router;
