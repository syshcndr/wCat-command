//wcat -n filename => give numbering to all the lines
var fs = require("fs");
const allLinesNumbering = (input) => {
  let data = fs.readFileSync(input[1], "utf8");
  const result = data.split(/\r\n/);
  let i = 1;
  result.forEach((element) => {
    console.log(`${i++}.` + element);
  });
};
module.exports = {
  fn: allLinesNumbering,
};
