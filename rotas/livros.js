const express = require('express')
const router = express.Router()
const {getLivros, getLivro, postLivro} = require('../controladores/livros')

router.get('/', getLivros) 
router.get('/:id', getLivro) 

router.post('/', postLivro)

router.patch('/', (req, res) => {
    res.send('Olá vc fez uma requisição pacth!')
})

router.delete('/', (req, res) => {
    res.send('Olá vc fez uma requisição delete!')
})

module.exports = router

