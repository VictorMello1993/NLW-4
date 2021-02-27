import 'reflect-metadata'
import express, { NextFunction, Request, Response } from "express"
import 'express-async-errors'
import createConnection from "./database"
import {router} from './routes'
import { AppError } from './errors/AppError'

createConnection()
const app = express()

//Base URL: http://localhost:3333/

// //1º parâmetro => Rota (Recurso da API)
// //2º parâmetro => request, response
// app.get("/", (req, res) => {
//     return res.json({message: "Hello World - NLW04"})
// })

// app.post("/", (req, res) => {
//     return res.json({message: "Os dados foram salvos com sucesso!"})
// })

app.use(express.json())
app.use(router)

//Usando a função middleware para retornar erros na API
app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({message: err.message})
    }

    return response.status(500).json({
        status: 'Error',
        message: `Internal server error ${err.message}`
    })
})

export {app}