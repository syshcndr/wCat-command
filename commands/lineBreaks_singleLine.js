//wcat -s filename => convert big line breaks into a singular file
var fs = require("fs");
const lineBreaks_singleLine = (input) => {
  let data = fs.readFileSync(input[1], "utf8");
  const result = data.split(/\r\n/);
  result.forEach((element) => {
    if (element != "") {
      console.log(element + "\n");
    }
  });
};
module.exports = {
  fn: lineBreaks_singleLine,
};
