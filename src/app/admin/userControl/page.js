import ListUser from "@/module/admin/ListUser";
import UserForm from "@/module/admin/UserForm";
import Image from "next/image";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

function UserControl() {
  // if (!data) redirect("/");

  return (
    <div className="w-full">
      <div className="flex flex-col m-5 justify-center gap-5">
        <p className="text-main text-xl border-b-[1px] border-opinion mb-5">
          ساخت کاربر جدید
        </p>
        <UserForm />
        <p className="text-main text-xl border-b-[1px] border-opinion mb-5">
          لیست کاربران
        </p>
        <ListUser />
      </div>
      <Toaster />
    </div>
  );
}

export default UserControl;
