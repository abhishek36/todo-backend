const todoController = require("../controller/todo.controller")
const router = require("express").Router()

router.post("/add", todoController.addtodo)

router.get("/get", todoController.gettodo)

router.put("/update/:id", todoController.updateCompleted)

router.delete("/delete/:id", todoController.deletetodo)


module.exports = router