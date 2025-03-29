import express from "express"

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Node")
});

app.get("/test", (req, res) => {
    res.send("Test Node")
});

app.post("/test", (req, res) => {
    res.send("Post Node")
});

app.get("/test/:id", (req, res) => {
    res.send(`Route Node GET:id => ${req.params.id}`)
});

app.use(express.text());
app.use(express.json());
app.post("/test/:id", (req, res) => {
    res.send(`Route Node POST:id => ${req.params.id}, ${req.body.id}`)
});

app.put("/test/:id", (req, res) => {
    res.send(`Route Node PUT:id => ${req.params.id}`)
});

app.delete("/test/:id", (req, res) => {
    res.send(`Route Node DELETE:id => ${req.params.id}`)
});

app.listen(3010, () => {
    console.log("Express Server Start!")
});
