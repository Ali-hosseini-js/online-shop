"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AuthPage from "@/layout/AuthPage";

function LoginPage() {
  useEffect(() => {
    return () => {
      document.documentElement.style.overflow = "hidden";
    };
  }, []);

  return <AuthPage />;
}

export default LoginPage;
