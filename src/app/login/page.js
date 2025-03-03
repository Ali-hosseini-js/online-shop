"use client";

import { redirect } from "next/navigation";
import AuthPage from "@/layout/AuthPage";
import { getCookie } from "@/utils/cookie";

function LoginPage() {
  const token = getCookie();
  if (token) {
    redirect("/");
  }

  return <AuthPage />;
}

export default LoginPage;
