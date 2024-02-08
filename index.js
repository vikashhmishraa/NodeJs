const express = require("express");
const fs = require("fs");
const { ConnectDatabase } = require("./connection");
const app = express();
const PORT = 5000;
const { LogReqRes } = require("./middlewares/log");
const userRouter = require("./routes/users");

// Connect MongoDB
ConnectDatabase("mongodb://127.0.0.1:27017/node-js").then(() => {
  console.log("MondoDB Connected!!!");
});

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(LogReqRes("Log.txt"));

// REST API
app.use(userRouter);
app.use(userRouter);

app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
