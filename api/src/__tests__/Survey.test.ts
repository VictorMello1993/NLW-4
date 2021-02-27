import request from 'supertest'
import { getConnection } from 'typeorm'
import { app } from '../app'

import createConnection from '../database'

describe('Surveys', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    })
    
    /*Tratativa para fechar o banco de dados de testes em qualquer sistema operacional, 
    em vez de executar script de remoção que só funciona para uma determinada plataforma. Então,
    remover a linha "posttest": "rm ./src/database/database.test.sqlite" do package.json*/
    afterAll(async () => {
        const connection = getConnection()
        await connection.dropDatabase()
        await connection.close()
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

