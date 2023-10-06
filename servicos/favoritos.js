const fs = require('fs')

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync('favoritos.json'))
}

function deletaFavoritosPorId(id) {
    const livros = JSON.parse(fs.readFileSync('favoritos.json'))

    const livrosFiltrados = livros.filter(livro => livro.id !== id)

    fs.writeFileSync('favoritos.json', JSON.stringify(livrosFiltrados))
}

function insereLivro(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json'))

    const livrosInseridos = livros.find(livro => livro.id === id)

    const novaListaDeLivrosFavoritos = [...favoritos, livrosInseridos]

    fs.writeFileSync('favoritos.json', JSON.stringify(novaListaDeLivrosFavoritos))
}

module.exports ={
    getTodosFavoritos,
    deletaFavoritosPorId,
    insereLivro
}