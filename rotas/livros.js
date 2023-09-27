const express = require('express')
const router = express.Router()
const {getLivros} = require('../controladores/livros')

router.get('/', getLivros) 


router.post('/', (req, res) => {
    res.send('Olá vc fez uma requisição post!!!')
})

router.patch('/', (req, res) => {
    res.send('Olá vc fez uma requisição pacth!')
})

router.delete('/', (req, res) => {
    res.send('Olá vc fez uma requisição delete!')
})

module.exports = router

