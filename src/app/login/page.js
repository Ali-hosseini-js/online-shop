import AuthPage from "@/layout/AuthPage";
import { redirect } from "next/navigation";

async function LoginPage() {
  const session = false;
  if (session) redirect("/");
  return <AuthPage />;
}

export default LoginPage;
