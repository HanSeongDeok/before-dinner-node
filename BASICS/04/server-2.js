// HTTP 모듈로 서버를 만들고 실행해보자
import { createServer } from "http"

// Server port (3001) => request 
const server = createServer((req, res) => {

    const { url, method } = req 

    res.setHeader("Content-type", "text/plain");
    if (method === "GET" && url === "/home") {
        res.write("HOME")
        res.end()
    } else if (method ==="GET" && url === "/about") {
        res.end("ABOUT")
    } else {
        res.end("NOT FOUND")
    }
});

// Server start
server.listen(3001, () => {
    console.log("SERVER START");
})