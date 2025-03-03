import OTP from "@/models/OTP";
import ShopUser from "@/models/User";
import connectDB from "@/utils/connectDB";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
  } catch (error) {
    throw new Error("مشکلی در سرور رخ داده است.");
  }
  const { mobile, otp } = await req.json();

  if (!otp) throw new Error("لطفا کد ارسال شده را وارد کنید");

  const otpRecord = await OTP.findOne({ mobile });

  if (!otpRecord) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید");

  const isValid = otp === otpRecord.otp; // Check if the provided code matches the stored OTP

  if (!isValid) throw new Error("کد وارد شده اشتباه است");

  // Fetch the user from the DivarUser collection
  const user = await ShopUser.findOne({ mobile });

  if (!user) throw new Error("کاربر یافت نشد");

  const token = sign({ mobile }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });

  return NextResponse.json({ message: token }, { status: 200 });
}
