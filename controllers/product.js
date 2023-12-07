const Product = require("../models/product");

async function handleProductAdd(req, res) {
    try {
        const { name, price } = req.body;
        console.log(name);
        await Product.create({
            name,
            price,
        });
        console.log("success");
        return res.send("success");  
    } catch (error) {
        console.error("Error adding product:", error);
        return res.status(500).send("Internal Server Error");
    }
}

async function getAllProducts(req, res) {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    handleProductAdd,
    getAllProducts,
};
