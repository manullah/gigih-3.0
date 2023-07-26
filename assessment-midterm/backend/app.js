const express = require("express");
const bodyParser = require("body-parser");

const config = require("./utils/config");
const database = require("./utils/database");
const routers = require("./routes/index");

const app = express();
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api/v1", routers);

app.listen(config.PORT, () => {
  console.log(`Server Started at ${config.PORT}`);
});
