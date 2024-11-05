
 const createProduct = async(req, res, next)=>{
    const {_id , name, stock, size}=req.body;
    const {photo}= req.file;

    if (!_id || !name || !stock || !size || !photo) return res.status(400).json("All fields are required")

    const newProduct = new Product(_id, name, stock, size, photo)
    await newProduct.save();

    res.status(201).json("product created successully")
}

module.exports = createProduct;