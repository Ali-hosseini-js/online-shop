"use client";

import { dashboard } from "@/data/dashboard";
import Breadcrumbs from "@/module/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function DashboardLayout({ children }) {
  const pathname = usePathname();
  return (
    <div>
      <Breadcrumbs />
      <div className="flex ">
        <div className="w-[320px] h-[780px] bg-mainGray pr-4">
          <div className="flex items-center p-5 mt-5 gap-3">
            <Image alt="" src="/personal/user.svg" width={40} height={40} />
            <p className="text-xl font-medium text-opinion"></p>
          </div>
          {dashboard.map((item) => {
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
                <Image alt="" src={item.image} width={24} height={24} />
                <p className="text-xl font-medium">{item.section}</p>
              </Link>
            );
          })}
          <button
            className="flex justify-start items-center  p-5 gap-3"
            onClick={() => signOut()}
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

export default DashboardLayout;
