import fs from 'fs';

fs.readFile("./std-fs/file.txt", (error, file) => {
    console.log(file);
});

const file = fs.readFileSync("./std-fs/file.txt");
console.log(file.toString());
    

fs.readFile("./std-fs/file.json", (error, file) => {
    console.log(JSON.parse(file.toString()));
})

console.log("opa ..")