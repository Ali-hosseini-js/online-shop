"use client";

import { redirect } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

function Ticket() {
  // if (!data) redirect("/");

  const submitHandler = (e) => {
    e.preventDefault();
    toast.success("پیام شما با موفقیت ارسال گردید.");
  };

  return (
    <div className="w-full">
      <div className="flex flex-col p-8 gap-4">
        <p className="text-xl font-medium">تماس با ما</p>
        <p className="text-[#606060] text-xl font-extralight">
          اگر سوال و مشکلی دارید تیکت بگذارید.
        </p>
      </div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col m-5 justify-center gap-5"
      >
        <label htmlFor="text" className="text-xl">
          متن پیام
        </label>
        <textarea
          rows={10}
          id="text"
          name="text"
          placeholder="متن خود را بنویسید..."
          className="border border-gray-400 rounded-2xl focus:outline-none w-1/2 max-md:w-full p-3"
          required
        />
        <button type="submit" className="button w-fit">
          ارسال پیام
        </button>
      </form>
      <Toaster />
    </div>
  );
}

export default Ticket;
