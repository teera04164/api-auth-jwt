import express from 'express'
import contag from '../src/app/controllers/contagController'
const router = express.Router()

router.get('/', (request, response) => {
    response.send('Hello')
})

router.post('/contag',contag.createContag)

module.exports =  router