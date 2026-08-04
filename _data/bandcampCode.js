const fs = require("fs");
const path = require("path");

module.exports = function () {
  const codesPath = path.join(__dirname, "..", "_data/bandcampCodes.txt");

  if (!fs.existsSync(codesPath)) return [];

  return fs
    .readFileSync(codesPath, "utf8")
    .split("\n")
    .map((c) => c.trim())
    .filter(Boolean);
};
