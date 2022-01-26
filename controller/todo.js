const { save, read, update, remove } = require("../utils/todo");

const saveTodo = (req, res) => {
    const { title, description, status } = req.body;
    const message = save({ title, description, status });

    if (message) return res.status(400).send({ error: message });

    res.send({ title, description, status });
};

const readTodo = (req, res) => {
    res.send(read());
};

const updateTodo = (req, res) => {
    req.body.title = req.params.title;

    update(req.body);

    res.send(read());
};

const removeTodo = (req, res) => {
    const message = remove(req.params.title);

    if (message) return res.status(404).send({ error: message });

    res.send(read());
};

module.exports = {
    saveTodo,
    readTodo,
    updateTodo,
    removeTodo
};
