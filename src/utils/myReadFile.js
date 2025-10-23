const fs = require("fs");
const path = require("path");

const myReadFile = (filename) => {
  const fullPath = path.join(process.cwd(), "db", filename);
  const fileData = fs.readFileSync(fullPath, "utf-8");
  return JSON.parse(fileData);
};

module.exports = myReadFile;