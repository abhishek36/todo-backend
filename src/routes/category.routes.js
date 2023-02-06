const categoryController = require("../controller/category.controller")
const router = require("express").Router()
const auth = require("../../helper/auth")
router.post("/add",auth, categoryController.addCategory)

router.get("/get",auth, categoryController.getCategory)

router.put("/update/:id",auth, categoryController.updateCategory)

router.delete("/delete/:id",auth, categoryController.deleteCategory)


module.exports = router