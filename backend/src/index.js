const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv/config");

const app = express();

mongoose.connect(
    process.env.MONGO_CONECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(express.json());
app.use(routes);

app.listen(process.env.SERVER_PORT);

console.log("Acesse http://localhost:" + process.env.SERVER_PORT);
