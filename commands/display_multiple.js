// wcat filename1 filename2 filename3... => displays content of all files in the terminal(contactinated form) in the given order.
var fs = require("fs");
let helpCmd = require("./help.js");

const display_multiple = (input) => {
  try {
    input.forEach((element) => {
      let data = fs.readFileSync(element, "utf8");
      console.log(data);
    });
  } catch (e) {
    helpCmd.fn();
  }
};
module.exports = {
  fn: display_multiple,
};
