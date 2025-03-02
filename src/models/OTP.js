import { Schema, model, models } from "mongoose";

const otpSchems = new Schema({
  mobile: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 180,
  }, // Expires in 3 minutes
});

const OTP = models.OTP || model("OTP", otpSchems);

export default OTP;
