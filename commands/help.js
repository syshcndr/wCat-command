const help = () => {
  console.log("The entered command is not correct. Recheck your command");
  console.log(`
Valid Commands:

    node wcat.js .txt       
    node wcat.js .txt .txt 
    node wcat.js -s .txt 
    node wcat.js -n .txt
    node wcat.js -b .txt 
    node wcat.js .txt grt .txt 
    node wcat.js .txt grtgrt .txt
    node wcat.js -s .txt grt .txt
    node help
  `);
};
module.exports = {
  fn: help,
};
