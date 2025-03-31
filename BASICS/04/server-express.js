import express from "express"

const router = express();

router.get("/", (req, res) => {
    res.send("Hello Node")
});

router.get("/test", (req, res) => {
    res.send("Test Node")
});

router.post("/test", (req, res) => {
    res.send("Post Node")
});

router.get("/test/:id", (req, res) => {
    res.send(`Route Node GET:id => ${req.params.id}`)
});

router.use(express.raw());
router.use(express.urlencoded({ extended: true }));
router.use(express.text());
router.use(express.json());
router.post("/test/:id", (req, res) => {
    res.send(`Route Node POST:id => ${req.params.id}, ${req.body.id}`)
});

router.put("/test/:id", (req, res) => {
    res.send(`Route Node PUT:id => ${req.params.id}`)
});

router.delete("/test/:id", (req, res) => {
    res.send(`Route Node DELETE:id => ${req.params.id}`)
});

router.listen(3010, () => {
    console.log("Express Server Start!")
});
