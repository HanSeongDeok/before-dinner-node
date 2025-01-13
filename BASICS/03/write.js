import { writeFile, appendFile  } from 'fs'

writeFile("./test.txt", "TEST\n", "utf8", (err) => {
    if (err) {
        console.log(err)
    }
    console.log("WRITE!")
});

appendFile("./test.txt", "추가된 내용\n", "utf8", (err) => {
    if (err) {
        console.log(err);
    } 
    console.log("내용이 추가되었습니다!");
});