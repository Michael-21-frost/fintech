const express = require('express');
const path = require('path');

let initial_path = path.join(__dirname, "public");

const app = express();
app.use(express.static(initial_path));


//load the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
    alert("welcome");
})

app.get("/", (req, res) => {
    res.sendFile(path.join(initial_path, "#"));
})

app.use((req, res) => {
    res.json("404");
})

app.listen("8000", () => {
    console.log('listening on port 8080');
})