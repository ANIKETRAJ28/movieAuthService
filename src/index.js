const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server-config");
const router = require("./routes/index");
const db = require("./models");

const app = express();

const startServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use("/api", router);

    app.listen(PORT, async () => {
        if(process.env.DB_SYNC) {
            await db.sequelize.sync({alert: true});
        }
        console.log(`Server running at port ${PORT}`);
    });
}

startServer();