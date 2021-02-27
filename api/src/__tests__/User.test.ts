import request from 'supertest'
import { getConnection } from 'typeorm'
import { app } from '../app'

import createConnection from '../database'

describe('Users', () => {
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
    
    it("Shoud be able to create a new user", async () => {
        const response = await request(app).post("/users").send({
    
            //Dados fake para testes de integração
            email : "user@example.com",
            name : "User example"
        })

        expect(response.status).toBe(201)
    })

    it("Should not be able to create a user with exists email", async () => {
        const response = await request(app).post("/users").send({

            //Dados fake para testes de integração
            email: "user@example.com",
            name: "User example"
        })

        expect(response.status).toBe(400)
    })
})

