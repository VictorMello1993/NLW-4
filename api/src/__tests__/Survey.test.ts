import request from 'supertest'
import { app } from '../app'

import createConnection from '../database'

describe('Surveys', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    })
    
    //Teste da requisição POST
    it("Shoud be able to create a new survey", async () => {
        const response = await request(app).post("/surveys").send({
    
            //Dados fake para testes de integração
            title : "Title Example",
            description : "Description Example"
        })

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('id')
    })

    //Teste da requisição GET 
    it("Should be able do get all surveys", async () => {
        await request(app).post('/surveys').send({
            title : "Title Example2",
            description: "Description Example2"
        })

        const response = await request(app).get('/surveys')

        expect(response.body.length).toBe(2)
    })
})

