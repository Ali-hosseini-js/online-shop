import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import LoginTimer from "@/module/LoginTimer";
import logo from "@/public/logo.svg";
import OtpInput from "@/module/OtpInput";
import Loader from "@/module/Loader";
import { useQueryClient } from "@tanstack/react-query";
import { QueryKeys } from "@/utils/QueryKey";

function CheckOtpForm({ mobile, setStep }) {
  const [otp, setOTP] = useState(null);
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const router = useRouter();

  const handleChangeOtp = (newOtp) => {
    setOTP(newOtp);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    setLoading(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/confirm`,
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ mobile, code: otp }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await res.json();

    setLoading(false);
    if (data.error) {
      toast.error(data.message);
    } else {
      toast.success(data.message);
      router.push("/");
      await queryClient.invalidateQueries({ queryKey: [QueryKeys.ROLE] });
    }
  };

  return (
    <div className="min-h-[calc(100vh-400px)] flex items-center justify-center mt-[150px] p-6">
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 ">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center justify-center gap-3">
              <Image alt="tecnoshop" src={logo} width={56} height={63} />
              <p className="text-2xl font-semibold text-main">تکنو شاپ</p>
            </Link>

            <h2 className="text-2xl font-normal text-mainTint text-center mb-6">
              ورود/ثبت نام
            </h2>
          </div>

          <form onSubmit={submitHandler} className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-600"
              >
                کد تایید را وارد کنید.
              </label>
              <OtpInput length={5} onChangeOtp={handleChangeOtp} />
              <div className="flex justify-between">
                <LoginTimer mobile={mobile} />
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="bg-inherit px-3 py-1  text-main"
                >
                  ویرایش شماره موبایل
                </button>
              </div>
              <button type="submit" className="disabled:opacity-50 button mt-4">
                ورود
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default CheckOtpForm;
