const { Router } = require("express");
const {
    saveTodo,
    readTodo,
    updateTodo,
    removeTodo
} = require("../controller/todo");

const router = Router();

router.get("/", (req, res) => {
    res.send("The server is up!");
});

router.post("/todo", saveTodo);

router.get("/todo", readTodo);

router.put("/todo/:title", updateTodo);

router.delete("/todo/:title", removeTodo);

module.exports = router;
