import express from "express"

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Node")
});

app.get("/test", (req, res) => {
    res.send("Test Node")
});

app.listen(3010, () => {
    console.log("Express Server Start!")
});
