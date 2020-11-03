import mongoose from "mongoose";

const schema = mongoose.Schema;

const productSchema = new schema({
  name: {
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }
});

const productModel = mongoose.model("product", productSchema);
export { productModel };
