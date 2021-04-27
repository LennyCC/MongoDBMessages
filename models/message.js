const db = require('../util/database')

module.exports = class Message {
    constructor(content, type, id, date) {
        this.id = id
        this.content = content;
        this.date = date || new Date();
        this.type = type;
    }


    static async save(content, type) {
       
        const messages = db.getDB().collection('messages')
        const message = new Message(content, type)
        const result = await messages.insertOne(message)
        
        console.log("Id del documento insertado: ", result.id)
    }

    static async fetchAll() {
        const messages = db.getDB().collection('messages')
        const cursor = await messages.find({}).sort("date", -1);
        const allMessages = await cursor.toArray()
        console.log("All", allMessages)
        return allMessages.map(message => {
            return new Message(message.content, message.type, message._id, message.date)
        })

    }

    static async fetchById(id) {
        const messages = db.getDB().collection('messages')
        const query = { "_id": db.ObjectId(id) }
        const message = await messages.findOne(query)

        return new Message(message.content, message.type, message._id, message.date)
    }

}