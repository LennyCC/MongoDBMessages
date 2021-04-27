// Crear un custom module que ofrezca

// 1. La mecanismos para conectarse a la base de datos
// 2. La posibilidad de recuperar la conexión a base de datos
// para realizar operaciones
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId

let _db;

exports.mongoConnect = async (uri, dbName, cb) => {
    const connect = await MongoClient.connect(uri)
    _db = connect.db(dbName)
    cb()
}

exports.getDB = () => {
    return _db
}

exports.ObjectId = (id) => {
    return new ObjectId(id)
}

