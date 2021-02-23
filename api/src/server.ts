import express from "express";

const app = express();


//Base URL: http://localhost:3333/

//1º parâmetro => Rota (Recurso da API)
//2º parâmetro => request, response
app.get("/", (req, res) => {
    return res.json({message: "Hello World - NLW04"})
})

app.post("/", (req, res) => {
    return res.json({message: "Os dados foram salvos com sucesso!"})
})

app.listen(3333, () => console.log("Server is running"))
