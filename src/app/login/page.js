import AuthPage from "@/layout/AuthPage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function LoginPage() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return <AuthPage />;
}

export default LoginPage;
