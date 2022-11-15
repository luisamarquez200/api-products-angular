const Product = require('../model/Product')

exports.createProduct = async (req, res) => {
    try {
        
        let product;

        product = new Product(req.body);
        await product.save();
        res.send(product)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.getProduct = async (req, res) => {
    try {
        
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        
        let products = await Product.findById(req.params.id);

        if(!products){
            res.status(404).json({msg:'No existe el producto'})
        }
        await Product.findOneAndRemove({_id:req.params.id})
        res.json({msg : 'Producto eliminado con éxito'});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}
