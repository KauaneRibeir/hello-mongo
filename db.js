const mongoose = require("mongoose")
const mongoDB = "mongodb+srv://dasilvaribeirokauane:W3eacObibOw7HTNM@cluster0.8pzqv.mongodb.net/"

async function main() {
    await mongoose.connect(mongoDB)
}

main()
.then(() => console.log("Conectado com sucesso"))

.catch(err => console.log(err))

module.exports = mongoose;
