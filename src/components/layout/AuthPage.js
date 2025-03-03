"use client";

import { useEffect, useState, useLayoutEffect } from "react";
import SendOtpForm from "@/template/SendOtpForm";
import CheckOtpForm from "@/template/CheckOtpForm";
import { Toaster } from "react-hot-toast";

function AuthPage() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.documentElement.style.overflow = "hidden";

      return () => {
        document.documentElement.style.overflow = "auto";
      };
    }
  }, [isMounted]);

  return (
    <div className="fixed top-0 right-0 w-full h-full backdrop-blur-[3px] flex items-center justify-center">
      {step === 1 && (
        <SendOtpForm setStep={setStep} mobile={mobile} setMobile={setMobile} />
      )}
      {step === 2 && <CheckOtpForm mobile={mobile} setStep={setStep} />}
      <Toaster />
    </div>
  );
}

export default AuthPage;
