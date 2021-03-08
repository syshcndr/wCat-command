//wcat filename => displays content of the file in the terminal
var fs = require("fs");

const display = (text) => {
  try {
    var data = fs.readFileSync(text, "utf8");
    console.log(data);
  } catch (e) {
    console.log(`${text} does not exist`);
  }
};
module.exports = {
  fn: display,
};
