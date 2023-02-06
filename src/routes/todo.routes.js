const todoController = require("../controller/todo.controller")
const router = require("express").Router()
const auth = require("../../helper/auth")
router.post("/add",auth, todoController.addtodo)

router.get("/get",auth, todoController.gettodo)

router.get("/get/:categoryId",auth, todoController.getTodoByCategoryId)

router.put("/update/:id",auth, todoController.updateCompleted)

router.delete("/delete/:id",auth, todoController.deletetodo)


module.exports = router