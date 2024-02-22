import Product from "../models/Product";

const insertProduct = async (req, res, next) => {
  const newProduct = req.body.newProduct;

  if (!newProduct) {
    return res.status(404).json({ error: "product not found" });
  }

  try {
    let ack = await Product.insertMany([newProduct]);
    if (ack) {
      return res.status(200).json({ ack });
    }
    console.log(ack);
    return res.status(500).json({ error: "database error" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "database error" });
  }
};

// get all products
const getProduct = async (req, res, next) => {
  try {
    let id = req.body.id || req.params.id || req.query.id;
    if (!id) {
      return res.statu(404).json({ error: "id not found" });
    }

    let product = await Product.findById(id);
    return res.status(200).json({ product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
};
const getProducts = async (req, res, next) => {
  try {
    let products = await Product.find({});
    return res.status(200).json({ products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
};

// remove product
const removeProduct = async (req, res, next) => {
  const id = req.params.id || req.body.id || req.query.id;
  if (!id) {
    return res.status(404).json({ error: "id not found" });
  }

  try {
    let ack = await Product.deleteOne({ _id: id });
    console.log(ack);
    if (ack) {
      return res.status(200).json({ ack: "product deleted" });
    } else {
      return res.status(500).json({ error: "internal server error" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
};

// update Product
const updateProduct = async (req, res, next) => {
  try {
    const id = "65d7bd75d2b3067f52de01ed";
    const updatedProduct = req.body.updateProducts;
    if (!updateProduct) {
      return res.status(404).json({ error: "update product not found" });
    }
    let updated = await Product.updateOne({ _id: id }, updatedProduct);

    if (updated) {
      return res.status(200).json({ updatedProduct: updated });
    }
    return res.status(500).json({ error: "database error" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
};

export { insertProduct, getProduct, getProducts, removeProduct, updateProduct };
