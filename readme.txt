//cat command alternative for windows

display :                                node wcat.js file1.txt       
display_multiple :                  node wcat.js file1.txt file1.txt 
lineBreaks_singleLine :         node wcat.js -s file1.txt 
allLinesNumbering :              node wcat.js -n file1.txt
nonEmptyLinesNumbering :  node wcat.js -b file1.txt 
copyFTFOverwrite :              node wcat.js file1.txt grt file1.txt 
appendContentFTF :              node wcat.js file1.txt grtgrt file1.txt
copyFTFformatSpaces :         node wcat.js -s file1.txt grt file1.txt
help:                                      node wcat.js help



wCat is a clone of cat command available in bash but not in windows cmd.

It is used to display or make a copy content of one or more files in the terminal 

General Syntax:
wcat [options] [files]


option to remove big line break (-s)
option to add line number to non empty lines (-b)
option to add line numbers to all lines (-n) 

Commands:

1- $ wcat filename => displays content of the file in the terminal 	display
2- $ wcat filename1 filename2 filename3... => displays content of all files in the terminal(contactinated form) in the given order.	display-multiple
3- $ wcat -s filename => convert big line breaks into a singular file 	lineBreaks-singleLine	
4- $ wcat -n filename => give numbering to all the lines 		allLinesNumbering
5- $ wcat -b filename => give numbering to non-empty lines 	nonEmptyLinesNumbering
6- $ wcat filename > filename2 => put all the content of filename into filename2 by overriding also creates filename2 if it doesn't exist.	copyFTFOverwrite
7- $ wcat filename >> filename2 => append all the content of filename into filename2	appendContentFTF
8- $ wcat -s filename > filename2 =>get the file content of filename remove large spaces and save the output in filename2	copyFTFformatSpaces


We can mix and match the options.


Edge cases:
1- If file entered is not found then it gives file does not exist error.
2- -n and -b are 2 options which are mutually exclusive so if user types both of them together only the first enter option should work.