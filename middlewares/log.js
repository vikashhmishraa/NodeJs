const fs = require("fs");

function LogReqRes(fileName) {
  return (req, res, next) => {
    const Datee = new Date();
    fs.appendFile(
      fileName,
      `${Datee} : ${req.ip} : ${req.method} : ${req.path}\n`,
      (err, res) => {
        next();
      }
    );
  };
}

module.exports = {
  LogReqRes,
};
