import express from "express";
const app = express();
app.get("/ads", (req, res) => {
    return res.json([
        { nome: "thiago", id: 1 },
        { nome: "thia", id: 2 },
        { nome: "thi", id: 3 }
    ]);
});
app.listen(3001);
