import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
  sellerName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },

  shopName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },

  gstNumber: {
    type: String,
    required: true,
    unique: true,
  },

  contactNumber: {
    type: Number,
    unique: true,
    trim: true,
    validate: {
      validator: function (v: any) {
        return /^\d{10}$/.test(v); // Check if the string contains exactly 10 digits
      },
      message: (props) => `${props.value} is not a valid 10-digit number!`,
    },
    required: true,
  },

  password: {
    type: String,
    minLength: 8,
    required: true,
    trim: true,
  },

  address: {
    type: String,
    required: true,
    trim: true,
  },
},  { timestamps: true }
);

const Seller = mongoose.models.seller || mongoose.model("seller", sellerSchema);

export default Seller;