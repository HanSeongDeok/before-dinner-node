import { readFile, writeFile } from 'fs'

readFile("./example.txt", "utf8", (err, files) => {
    if (err) {
        console.log(err);
    }
    writeFile("./test.txt", files, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("files create!!");
    });
});

readFile("./list.js", "utf8", (err, files) => {
    if (err) {
        console.log(err);
    }
    console.log(files);
});