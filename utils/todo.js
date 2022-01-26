const fs = require("fs");

const loadData = () => {
    let dataBuffer = fs.readFileSync("data.json");
    let dataString = dataBuffer.toString();

    if (dataString.length > 0) {
        return JSON.parse(dataString);
    }

    return [];
};

const find = (data, title) => {
    const check = data.find((datum) => datum.title == title);

    if (!check) {
        return false;
    }

    return true;
};

const save = (todo) => {
    const data = loadData();

    const isRepeated = find(data, todo.title);

    if (!isRepeated) {
        data.push(todo);
        const dataJSON = JSON.stringify(data);

        fs.writeFileSync("data.json", dataJSON);
    } else {
        return "Already exists!";
    }
};

const read = () => {
    const data = loadData();

    return data;
};

const update = (todo) => {
    const data = loadData();

    const isFound = find(data, todo.title);

    if (!isFound) {
        return "Not found!";
    }

    data.forEach((datum) => {
        if (datum.title == todo.title) {
            datum.description = todo.description;
            datum.status = todo.status;
        }
    });

    const dataJSON = JSON.stringify(data);

    fs.writeFileSync("data.json", dataJSON);
};

const remove = (title) => {
    const data = loadData();

    const isFound = find(data, title);

    if (!isFound) {
        return "Not found!";
    }

    let newData = data.filter((datum) => title !== datum.title);

    const dataJSON = JSON.stringify(newData);

    fs.writeFileSync("data.json", dataJSON);
};

module.exports = {
    save,
    read,
    update,
    remove
};
