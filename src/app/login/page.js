"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";

function LoginPage() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    return () => {
      document.documentElement.style.overflow = "hidden";
    };
  }, []);

  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // TODO: Implement actual login logic here
      console.log("Login attempt with phone:", phone);
      // On successful login:
      // router.push("/");
    } catch (err) {
      setError("خطا در ورود. لطفا مجددا تلاش کنید.");
    }
  };

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="fixed top-0 right-0 w-full h-full backdrop-blur-[3px] flex items-center justify-center">
      <div className="min-h-[calc(100vh-400px)] flex items-center justify-center mt-[150px] p-6">
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

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-600"
              >
                شماره موبایل خود را وارد نمایید
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={handleChange}
                placeholder="09XXXXXXXXX"
                className="p-3 border border-none bg-gray-100 rounded-lg focus:outline-none focus:border-main"
                pattern="^0\d{10}$"
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckbox}
                className="appearance-none w-5 h-5 border border-main rounded checked:bg-main checked:border-transparent checked:after:content-['✓'] checked:after:text-white checked:after:block checked:after:text-center"
              />

              <p className="text-sm font-normal text-gray-600">
                با ورود و ثبت‌ نام در سایت، با
                <span className="text-main">قوانین تکنو شاپ</span> موافقت
                می‌کنم.
              </p>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              disabled={!isChecked}
              type="submit"
              className="disabled:opacity-50 button mt-4"
            >
              تایید
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
