"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

function Gift() {
  const { data } = useSession();

  if (!data) redirect("/");

  return (
    <div className="w-full">
      <div className="flex flex-col p-8 gap-4">
        <p className="text-xl font-medium">کارت هدیه دارید؟</p>
        <p className="text-[#606060] text-xl font-extralight">لیست کارت ها</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <Image
          className="size-[290px]"
          alt=""
          src="/gift.png"
          width={300}
          height={300}
        />
        <p className="text-center text-2xl">
          کسی به شما کارت هدیه داده؟ یا خودتون کارت هدیه دارید؟ <br />
          اینجا اضافه کنید تا بعدا دنبالش نگردید
        </p>
        <button className="button m-3 w-fit">اضافه کردن کارت هدیه</button>
      </div>
    </div>
  );
}

export default Gift;
