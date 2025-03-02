import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: "USER",
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const ShopUser = models.ShopUser || model("ShopUser", userSchema);

export default ShopUser;
