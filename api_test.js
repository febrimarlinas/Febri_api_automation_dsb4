const { expect } = require("chai");
const supertest = require("supertest");
const request = require("supertest");

describe('restful-api.dev API Test', () => {
    it('TC1 - GET Single User', async ()=>{

        // test logic
        const response = await supertest("https://reqres.in").get("/api/users/2")
        console.log(response)

        
    });
    it('TC2 - POST Create', async ()=>{

        // test logic
        const body = {
                "name": "morpheus",
                "job": "leader"
        }
        const response = await request("https://reqres.in").post("/api/users").send(body);
        console.log(response)

    });

    it('TC3 - Delete', async ()=>{
        // test logic
        const response = await supertest("https://reqres.in").delete("/api/users/2")
        console.log(response)
    });

    it('TC4 - Put', async ()=>{
        // test logic

        const body = {
            "name": "morpheus",
            "job": "zion resident"
    }
    const response = await request("https://reqres.in").put("/api/users/2").send(body);
    console.log(response)
    });

});