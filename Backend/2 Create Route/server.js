import express from 'express';

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello!, We are connecting to route(type /api/info)");
});

app.get("/api/info", (req, res) => {
    res.json({
        message: "Welcome to API",
        status: "Success",
        time: new Date().toDateString()
    });
});

app.listen(PORT, () =>{
    console.log(`Server running on port:http://localhost:${PORT}`);
});