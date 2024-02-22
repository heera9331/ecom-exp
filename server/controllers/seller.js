import Seller from "../models/seller.js";

const registerSeller = async (req, res, next) => {
  const seller = req.body.seller;
  console.log("seller from 5 is :- ", seller);

  if (!seller) {
    return res.send("Please Provide Correct Details");
  }

  let result = await Seller.create(seller);

  if (result) {
    return res.json({ seller: result });
  } else {
    return res.send("seller is not created");
  }
};

const getSeller = async (req, res, next) => {
  const id = req.body.id || req.query.id;
  if (!id) {
    return res.send("Please Provide Correct ID");
  }

  const result = await Seller.findOne({ _id: id });
  if (!result) {
    return res.send("Seller not found");
  }

  return res.json({
    msg: "User found",
    result,
  });
};

const allSellers = async (req, res, next) => {
  const allSellers = await Seller.find({});

  if (allSellers) {
    return res.json({ msg: true, allSellers });
  }
  return res.send("Some error occured");
};

const updateSeller = async (req, res, next) => {
  const updateSeller = req.body.updatedSeller;
  const id = req.body.id || req.query.id;

  if (!updateSeller && !id) {
    return res.send("please provide correct details");
  }

  const updatedResult = await Seller.findByIdAndUpdate(id, updateSeller,{new:true});

  if(!updatedResult){
    return res.send("Not Updated")
  }
  return res.json({msg:"true",updatedResult})
};

const deleteSeller = async (req,res,next)=>{
    const id = req.body.id || req.query.id;
    
    if (!id) {
        return res.send("Please Provide Correct ID");
    }

    const afterDelete = await Seller.deleteOne({_id:id})
    if (!afterDelete) {
        return res.json({ error: "user not deleted" });
      }
    
      return res.json({ afterDelete });
    
}
export { registerSeller, getSeller, allSellers, updateSeller, deleteSeller };
