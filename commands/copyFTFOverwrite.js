//wcat filename > filename2 => put all the content of filename into filename2 by overriding also creates filename2 if it doesn't exist.
var fs = require("fs");
const copyFTFOverwrite = (input) => {
  let src = input[0];
  let dst = input[2];
  fs.copyFile(src, dst, (err) => {
    if (err) throw err;
    console.log("source.txt was copied to destination.txt");
  });
};
module.exports = {
  fn: copyFTFOverwrite,
};
