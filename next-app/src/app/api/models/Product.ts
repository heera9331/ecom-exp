import mongoose from "mongoose";




const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            minlength: 3,
            maxlength: 64,
        },
        description: {
            type: String,
            trim: true,
            required: true,
            lowercase: true,
            minlength: 3,
            maxlength: 255,
        },
        imageUrl: {
            type: String,
            trim: true,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: 0,
        },
        buyPrice: {
            type: Number,
            required: true,
            min: 0,
        },
        msrp: {
            type: Number,
            required: true,
            min: 0,
        },
        sellerId: {
            type: mongoose.Types.ObjectId,
            ref: "seller",
            required: true,
        },
        // category:{
        //     type: String,
        //     required: true,
        // },
        // tags: {
        //     type: mongoose.Types.Array<String>
        // }
    },
    { timestamps: true }
);

const Product =
    mongoose.models.product || mongoose.model("product", productSchema);

export default Product;