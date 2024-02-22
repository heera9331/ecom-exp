import mongoose from "mongoose";

// order date is the current timestamp that is createdAt
// object id is -> the order number
// comment - it just a message

const orderSchema = new mongoose.Schema(
  {
    requiredDate: {
      type: Date,
      required: true,
    },
    shippedDate: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
      lowercase: true,
      minlength: 3,
      maxlength: 255,
    },
    comment: {
      type: String,
      lowercase: true,
      minlength: 3,
      maxlength: 255,
    },
    orderedQuantity: {
      type: Number,
      required: true,
      min: 1,  
    },
    customerId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.models.order || mongoose.model("order", orderSchema);

export default Order;
