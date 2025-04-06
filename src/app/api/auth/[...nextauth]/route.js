import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/utils/connectDB";
import OTP from "@/models/OTP";
import ShopUser from "@/models/User";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { mobile, otp } = credentials;

        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در سرور رخ داده است.");
        }

        if (!otp) throw new Error("لطفا کد ارسال شده را وارد کنید");

        const otpRecord = await OTP.findOne({ mobile });

        if (!otpRecord) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید");

        const isValid = otp === otpRecord.otp; // Check if the provided code matches the stored OTP

        if (!isValid) throw new Error("کد وارد شده اشتباه است");

        // Fetch the user from the ShopUser collection
        const user = await ShopUser.findOne({ mobile });

        if (!user) throw new Error("کاربر یافت نشد");

        console.log("Authorize function returning:", {
          mobile,
          role: user.role,
        });
        return { mobile, role: user.role }; // Return the user's mobile and role
      },
    }),
  ],
  callbacks: {
    // Add the `mobile` and `role` fields to the JWT token
    async jwt({ token, user }) {
      if (user) {
        token.mobile = user.mobile; // Pass the `mobile` field from the user object to the token
        token.role = user.role; // Pass the `role` field from the user object to the token
      }
      return token;
    },
    // Add the `mobile` and `role` fields to the session object
    async session({ session, token }) {
      session.user.mobile = token.mobile; // Pass the `mobile` field from the token to the session
      session.user.role = token.role; // Pass the `role` field from the token to the session
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
