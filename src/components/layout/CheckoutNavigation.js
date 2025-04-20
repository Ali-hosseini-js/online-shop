"use client";
import { usePathname } from "next/navigation";
import { checkout } from "@/data/checkout";
import Image from "next/image";

function CheckoutNavigation({ children }) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col ">
      <div className="flex items-center justify-between py-10">
        {checkout.map((item) => {
          const pathSegments = pathname.split("/");
          const currentStep =
            pathSegments[pathSegments.length - 1] || pathSegments[1];
          const isActive = currentStep === item.href;
          const activeStep = checkout.find((step) => step.href === currentStep);
          const activeStepId = activeStep?.id || 1;
          const isPastStep = item.id < activeStepId;
          return (
            <div key={item.id} className="flex items-center gap-3">
              <div
                className={`flex items-center justify-center rounded-full  border ${
                  isActive ? "bg-main" : "bg-white"
                } ${
                  isPastStep ? "border-[#00BA88]" : "border-opinion"
                } size-[60px]`}
              >
                <Image
                  alt=""
                  src={item.image}
                  width={35}
                  height={35}
                  className="text-opinion size-[35px] "
                />
              </div>
              <div>
                <p className="text-opinion text-xs">{item.section}</p>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-main text-xl border-b-[1px] border-opinion">
        سبد خرید شما
      </p>
      <div>{children}</div>
    </div>
  );
}

export default CheckoutNavigation;
