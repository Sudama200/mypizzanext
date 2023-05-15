import Product from "../../../models/Product";
import dbConnect from "../../../util/mongo";

export default async function handler(req, res) {
    const {method} = req;
    const MONGO_URL = process.env.MONGO_URL
    dbConnect()
    if(method === 'GET'){
        const products = await Product.find();
        res.status(200).json(products)
    }
    if(method === 'POST'){
        try {
            const product = await Product.create(req.body);
            res.status(201).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
    }
  }
  