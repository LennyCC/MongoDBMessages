# MVC - Messages

We want to implement the model of this Model View Controller app using MongoDB as a database. Find the name of the database contained in the connection string. The collection to use is up to you, but I recommend to use a collection named **messages**

![image](https://oscarm.tinytake.com/media/d35c49?filename=1592471077101_TinyTake18-06-2020-11-04-06_637280678791889350.png&sub_type=thumbnail_preview&type=attachment&width=779&height=463&&salt=NDM4NjkwNl8xMzg1MTcyMQ)

## Methods to implement

### models/index.js : save(content, type)

This function must create a new instance of class _Message_. Afterwards, it must insert that instance in the collection **messages**. 

### models/index.js : fetchAll()

This function will fetch all the documents from the collection **messages**. It is not strictly needed, but you may modify the model constructor in order to store the __id__ provided by MongoDB for each document. Conveniently, you could return an array of Messages to the controller.

### view/index.ejs

Probably you'll have to modify this view because __message.id__ is not informed at the moment

### models/index.js : fetchById(id)

It must return an instance of the class Message. Perform a __findOne__ operation against the MongoDB database in order to retrieve the record

