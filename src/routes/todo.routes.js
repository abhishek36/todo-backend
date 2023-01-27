const todoController = require("../controller/todo.controller")
const router = require("express").Router()

router.post("/add", todoController.addtodo)

router.get("/get", todoController.gettodo)

module.exports = router