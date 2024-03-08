const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server-config");

const app = express();

const startServer = () => {
    app.use(bodyParser);
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, async () => {
        console.log(`Server running at port ${PORT}`);
    });
}

startServer();