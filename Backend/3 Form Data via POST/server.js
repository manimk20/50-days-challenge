import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

app.get("/api/info", (req, res) => {
    res.json({
        message: "Welcome to API",
        status: "Success",
        time: new Date().toDateString()
    });
});

app.post("/submit", (req, res) =>{
    const { name, email } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({ error: "name and email are required." });
    }

    res.json({
        message: "Form submitted successfully",
        data: { name, email }
    });
});

app.listen(PORT, () =>{
    console.log(`Server running on port:http://localhost:${PORT}`);
});