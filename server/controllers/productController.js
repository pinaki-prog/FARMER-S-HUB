const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    const { name, price, image } = req.body;
    try {
        const newProduct = new Product({ name, price, image });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
