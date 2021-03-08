//wcat filename >> filename2 => append all the content of filename into filename2
var fs = require("fs");
const appendContentFTF = (input) => {
  let src = input[0];
  let dst = input[2];
  let srcdata = fs.readFileSync(src, "utf8");
  let srcresult = srcdata.split(/\r\n/);

  srcresult.forEach((element) => {
    fs.appendFile(dst, element + "\n", (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  });
};
module.exports = {
  fn: appendContentFTF,
};
