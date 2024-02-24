import Seller from "../models/seller.js";

const sellerExist = async (req, res, next) => {
  const gstNumber = req.body.seller.gstNumber;

  if (!gstNumber) {
    return res.send("Please provide correct GST Number");
  }

  const ifExist = await Seller.findOne({ gstNumber });

  if (ifExist) {
    return res.send("Seller already registered, Please Sign in ...");
  } else {
   console.log("seller can be created");
    next()

  }
};

export { sellerExist };
