import nextConnect from 'next-connect'
import dbMiddleware from '../../middlewares/database'

const handler = nextConnect()

handler.use(dbMiddleware)

handler.get(async (req, res) => {
    const docs = await req.db.collection(req.query.table).find().sort({ _id: 1 }).toArray()

    res.json(docs)
})

export default handler