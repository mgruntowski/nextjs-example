import nextConnect from 'next-connect'
import dbMiddleware from '../../../middlewares/database'
import { ObjectId } from 'mongodb'

const handler = nextConnect()

handler.use(dbMiddleware)

handler.get(async (req, res) => {
    const { ufId } = req.query

    const doc = await req.db.collection('ufs').findOne({ _id: ObjectId(ufId) })

    res.json(doc)
})

export default handler