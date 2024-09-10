const db =require("./db.js")
const Schema = db.Schema
const livroSchema = new Schema({
nome: {
    type: String,
    required: [true, "imforme seu nome"]
},

qtdPaginas: {
    type: Number
}

})


const Livro = db.model("Livro", livroSchema)

module.exports = Livro