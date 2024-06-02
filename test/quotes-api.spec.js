import axios from "axios"
import expect from './lib.js'
import { schemaDelete, schemaGet, schemaPost, schemaPut } from "../schemas/schema.js"

// GET API Testing
describe ('Get Quotes and Todos API Testing', function(){
    it('Get status Quotes', async function(){
        const res = await axios.get('https://dummyjson.com/quotes')
        expect(res.status).to.equal(200)
        expect(res.data).to.be.jsonSchema(schemaGet)
    })
    it('Post Todos', async function(){
        const res = await axios.post('https://dummyjson.com/todos/add',{
            todo:'test',
            userId: 5
        })
        expect(res.data).to.be.jsonSchema(schemaPost)
    })
    it('Put Todos', async function(){
        const res = await axios.put('https://dummyjson.com/todos/3',{
            todo:'new',
            userId: 5
        })
        expect(res.data).to.be.jsonSchema(schemaPut)
    })
    it('Delete Todos', async function(){
        const res = await axios.delete('https://dummyjson.com/todos/7')
        expect(res.data).to.be.jsonSchema(schemaDelete)
    })
})