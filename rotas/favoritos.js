const express = require('express')
const { getFavoritos, postFavoritos, deletaFavorito } = require('../controladores/favoritos')
const router = express.Router()

router.get('/', getFavoritos)

router.post('/:id', postFavoritos)

router.delete('/:id', deletaFavorito)

module.exports = router