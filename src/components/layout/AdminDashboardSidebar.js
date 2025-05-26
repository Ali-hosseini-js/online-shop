"use client";

import { adminDashboard } from "@/data/admin";
import Breadcrumbs from "@/module/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "src/context/CartContext";

function AdminDashboardLayout({ children }) {
  const pathname = usePathname();
  const [state, dispatch] = useCart();

  const signOut = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/panel/logout`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    const data = await res.json();
    console.log("logout:", data);

    if (data.success) {
      window.location.href = "/";
    }
  };

  return (
    <div>
      <Breadcrumbs />
      <div className="flex ">
        <div className="w-[320px] h-[780px] bg-mainGray pr-4">
          <div className="flex items-center p-5 mt-5 gap-3">
            <Image alt="" src="/personal/user.svg" width={40} height={40} />
            <p className="text-xl font-medium text-opinion">
              {state.profile?.firstName} {state.profile?.lastName}
            </p>
          </div>
          {adminDashboard.map((item) => {
            const pathSegments = pathname.split("/");
            const currentStep =
              pathSegments[pathSegments.length - 1] || pathSegments[1];
            const isActive = currentStep === item.href;
            return (
              <Link
                href={item.href}
                key={item.id}
                className="flex justify-start items-center  p-5 gap-3"
              >
                <Image
                  className="w-6 h-6"
                  alt=""
                  src={item.image}
                  width={24}
                  height={24}
                />
                <p className="text-xl font-medium text-nowrap">
                  {item.section}
                </p>
              </Link>
            );
          })}
          <button
            className="flex justify-start items-center  p-5 gap-3"
            onClick={signOut}
          >
            <Image alt="" src="/dashboard/logout.svg" width={24} height={24} />
            <p className="text-xl font-medium text-red-600">خروج</p>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default AdminDashboardLayout;
