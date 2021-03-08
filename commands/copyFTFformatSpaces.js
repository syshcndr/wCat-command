//wcat -s filename > filename2 =>get the file content of filename remove large spaces and save the output in filename2
var fs = require("fs");
const copyFTFformatSpaces = (input) => {
  let src = input[1];
  let dst = input[3];
  let srcdata = fs.readFileSync(src, "utf8");
  let srcresult = srcdata.split(/\r\n/);
  srcresult.forEach((element) => {
    if (element != "") {
      fs.appendFile(dst, element + " ", (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
    }
  });
};
module.exports = {
  fn: copyFTFformatSpaces,
};
