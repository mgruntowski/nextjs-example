import { MongoClient } from 'mongodb'
import nextConnect from 'next-connect'

const client = new MongoClient('mongodb+srv://kick:ikulwf44@arker-cluster.6ofz9.mongodb.net/arkerdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

async function database(req, res, next) {
    if (!client.isConnected()) await client.connect()
    req.dbClient = client
    req.db = client.db('arkerdb')
    return next()
}

const middleware = nextConnect()

middleware.use(database)

export default middleware