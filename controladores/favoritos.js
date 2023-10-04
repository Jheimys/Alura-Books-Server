const { getTodosFavoritos, insereLivro, deletaFavoritosPorId } = require("../servicos/favoritos")


function getFavoritos(req, res) {
    try {
        const livros = getTodosFavoritos()
        res.send(livros)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavoritos(req, res){
    try {
        const id = req.params.id 
        insereLivro(id)
        res.send('Livro inserido com sucesso!')
        res.status(201)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deletaFavorito(req, res) {
    try {
        const id = req.params.id 

        if(id && Number(id)) {
            deletaFavoritosPorId(id)
            res.send('Favorito deletado com sucesso!')
        } else {
            res.status(422)
            res.send('ID inválido!')
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


module.exports = {
    getFavoritos,
    postFavoritos,
    deletaFavorito
}