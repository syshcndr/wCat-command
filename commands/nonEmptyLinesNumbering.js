//wcat -b filename => give numbering to non-empty lines
var fs = require("fs");
const nonEmptyLinesNumbering = (input) => {
  let data = fs.readFileSync(input[1], "utf8");
  let result = data.split(/\r\n/);
  let i = 1;
  result.forEach((element) => {
    if (element !== "") {
      console.log(`${i++}.` + element);
    } else {
      console.log(element);
    }
  });
};
module.exports = {
  fn: nonEmptyLinesNumbering,
};
