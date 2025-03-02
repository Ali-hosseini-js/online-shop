import DivarUser from "@/models/DivarUser";
import OTP from "@/models/OTP";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const { mobile } = await req.json();
    console.log({ mobile });

    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log(otp);

    const existingUser = await DivarUser.findOne({ mobile });

    if (!existingUser) {
      await DivarUser.create({
        mobile: mobile,
      });
    }

    const existingOTP = await OTP.findOne({ mobile });

    if (!existingOTP) {
      await OTP.create({ mobile: mobile, otp: otp });
    } else {
      return NextResponse.json(
        { message: "بعد از اتمام زمان تعیید شده مجدد امتحان کنید" },
        { status: 400 }
      );
    }

    //in this level send otp via sms or email

    return NextResponse.json({ message: otp }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      {
        status: 500,
      }
    );
  }
}
