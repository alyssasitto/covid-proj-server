const app = require("express")();

require("dotenv").config();

require("./config")(app);

const authRouter = require("./routes/auth.routes");
app.use("/", authRouter);

module.exports = app;
