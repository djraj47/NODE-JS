const { isUtf8 } = require('buffer');
const fs = require('fs');
/**
*! creating a folder
** fs.mkdirSync("Raj");

*! creating a file 
** fs.writeFileSync("Raj/bio.txt","My name is raj kiran");

*! creating a file 
** fs.writeFileSync("Raj/bio.txt","My name is raj kiran");

*! append file 
** fs.appendFileSync("Raj/bio.txt", "I am a boy");

*! read file
** const dataa = fs.readFileSync("Raj/bio.txt").toString();
** console.log(dataa);
**    or 
** console.log(fs.readFileSync("Raj/bio.txt", "utf-8"));

*! remane file
** fs.renameSync("Raj/bio.txt", "Raj/myBio.txt");

*! Delete file 
** fs.unlinkSync("Raj/myBio.txt");

*! Delete dir
** fs.rmdirSync("Raj");

**/

