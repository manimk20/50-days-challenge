import "dotenv/config";
import express from 'express';

const app = express();
const PORT = 3000;
const APP_NAME = process.env.APP_NAME;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`Welcome to ${APP_NAME}`);
});

app.listen(PORT, () => {
    console.log(`${APP_NAME} Server running on port:http://localhost:${PORT}`);
});