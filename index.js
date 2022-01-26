const express = require("express");
const route = require("./routes/route");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(route);

app.listen(port, () => {
    console.log(`The server is up at port ${port}!`);
});
