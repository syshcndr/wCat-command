let displayCmd = require("./commands/display.js");
let allLinesNumberingCmd = require("./commands/allLinesNumbering.js");
let appendContentFTFCmd = require("./commands/appendContentFTF.js");
let copyFTFformatSpacesCmd = require("./commands/copyFTFformatSpaces.js");
let copyFTFOverwriteCmd = require("./commands/copyFTFOverwrite.js");
let display_multipleCmd = require("./commands/display_multiple.js");
let lineBreaks_singleLineCmd = require("./commands/lineBreaks_singleLine.js");
let nonEmptyLinesNumberingCmd = require("./commands/nonEmptyLinesNumbering.js");
let helpCmd = require("./commands/help.js");

let input = process.argv.slice(2);
let command = input[0];

var scount = 0;
var ncount = 0;
var bcount = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] == "-s") {
    scount++;
  } else if (input[i] == "-n") {
    ncount++;
  }
  if (input[i] == "-b") {
    bcount++;
  }
}

if (input[0] == "help") {
  help();
} else if (scount != 0 || ncount != 0 || bcount != 0) {
  commandHasAlias();
} else if (input[1] == "grt" || input[1] == "grtgrt") {
  commandHasGrt();
} else {
  commandHasFilesOnly();
}

function commandHasAlias() {
  switch (command) {
    case "-s":
      if (input[2] == "grt") {
        copyFTFformatSpaces();
      } else if (input.length == 2) {
        lineBreaks_singleLine();
      }
      break;
    case "-n":
      if (input.length == 2) {
        allLinesNumbering();
      }
      break;
    case "-b":
      nonEmptyLinesNumbering();

      break;
    case "help":
      help();
      break;
    default:
      help();
      break;
  }
}

function commandHasGrt() {
  let key = input[1] == "grt" ? true : false;
  if (key) {
    copyFTFOverwrite();
  } else {
    appendContentFTF();
  }
}

function commandHasFilesOnly() {
  if (command.includes(".txt")) {
    let key = true;

    for (let i = 0; i < input.length; i++) {
      if (!input[i].includes(".txt")) {
        key = false;
        help();
        break;
      }
    }

    if (input.length == 1) {
      display();
    } else if (key) {
      display_multiple();
    }
  }
}

function display() {
  displayCmd.fn(input[0]);
}

function display_multiple() {
  display_multipleCmd.fn(input);
}

function lineBreaks_singleLine() {
  lineBreaks_singleLineCmd.fn(input);
}

function allLinesNumbering() {
  allLinesNumberingCmd.fn(input);
}

function nonEmptyLinesNumbering() {
  nonEmptyLinesNumberingCmd.fn(input);
}

function copyFTFOverwrite() {
  copyFTFOverwriteCmd.fn(input);
}

function appendContentFTF() {
  appendContentFTFCmd.fn(input);
}

function copyFTFformatSpaces() {
  copyFTFformatSpacesCmd.fn(input);
}

function help() {
  helpCmd.fn();
}
