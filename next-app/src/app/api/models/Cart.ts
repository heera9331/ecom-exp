import mongoose from "mongoose";


const productItem = new mongoose.Schema({
    productId:{
        type:mongoose.Types.ObjectId,
        ref:"Product",
        require:true
    },
    quantity:{
        type:Number,
        require:true,
        default:1
    }
})

const cartSchema = new mongoose.Schema({
    customerId : {
        type:mongoose.Types.ObjectId,
        ref:"User",
        require:true
    },
    products:[productItem]

})

const Cart = mongoose.models.cart || mongoose.model("cart",cartSchema)

export default Cart