"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthPage from "@/layout/AuthPage";
import { getCookie } from "@/utils/cookie";

function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const token = getCookie();
    if (token) {
      router.push("/");
    }
  }, [router]);

  return <AuthPage />;
}

export default LoginPage;
