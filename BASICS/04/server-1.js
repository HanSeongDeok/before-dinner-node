// HTTP 모듈로 서버를 만들고 실행해보자
import { createServer } from "http"

// Server port (3001) => request 
const server = createServer((req, res) => {
    console.log("REQUEST");
    console.log(req);
    res.setHeader("Content-type", "text/plain");
    res.write("HELLO NODE");
    res.end();
});

// Server start
server.listen(3001, () => {
    console.log("SERVER START");
})