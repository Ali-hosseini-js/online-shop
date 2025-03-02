"use client";

import { useState } from "react";
import SendOtpForm from "@/template/SendOtpForm";
import CheckOtpForm from "@/template/CheckOtpForm";
import { Toaster } from "react-hot-toast";

function AuthPage() {
  const [step, setStep] = useState(2);
  const [mobile, setMobile] = useState("");

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
