const app = require("express")();
const cors = require("cors");
const port = process.env.PORT || 2000;
const bodyParser = require("body-parser");
const { User } = require("../database/models");
const errorHandler = require("./handlers/errorHandler");
const { userRouter, addressRouter } = require("./routers");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.status(200).send("API");
});

app.use("/user", userRouter);
app.use("/address", addressRouter);

app.use(errorHandler);

app.listen(port, () => console.log("active"));
