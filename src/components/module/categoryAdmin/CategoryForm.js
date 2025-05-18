"use client";

import { getCategories } from "@/services/category/AllCategoryApi";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

function CategoryForm() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    url: "",
    image: "",
  });
  const [file, setFile] = useState(null);
  const queryClient = useQueryClient();

  const uploadFile = async (e) => {
    e.preventDefault();
    if (!file) {
      toast.error("لطفا یک تصویر انتخاب کنید");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    const uploadResponse = await fetch("http://localhost:3100/upload-file", {
      method: "POST",
      credentials: "include",
      body: formData,
    });

    const uploadData = await uploadResponse.json();
    console.log("upload:", uploadData);
    if (uploadData.error) {
      toast.error("فایل صحیح را بارگذاری کنید");
    } else {
      toast.success("تصویر با موفقیت بارگذاری گردید");
    }

    setForm({ ...form, image: uploadData.fileName });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const categoryResponse = await fetch(
        "http://localhost:3100/product-category",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const categoryData = await categoryResponse.json();

      if (categoryData.error) {
        toast.error(categoryData.message);
      } else {
        toast.success(categoryData.message);
        setForm({ title: "", content: "", url: "", image: "" });
        await queryClient.invalidateQueries({ queryKey: ["categories"] });
      }
    } catch (error) {
      toast.error(error.message || "خطا در ثبت دسته‌بندی");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="grid grid-cols-2 max-xl:grid-cols-1">
        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          عنوان{" "}
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/user.svg" width={24} height={24} />
            <input
              id="title"
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
          </div>
        </label>
        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          توضیحات{" "}
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/direct.svg" width={24} height={24} />
            <input
              id="content"
              type="text"
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
          </div>
        </label>

        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          آدرس اینترنتی محصول{" "}
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/call.svg" width={24} height={24} />
            <input
              id="url"
              type="text"
              value={form.url}
              onChange={(e) => setForm({ ...form, url: e.target.value })}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
          </div>
        </label>

        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          تصویر{" "}
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <input
              id="image"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
          </div>
          <button type="button" className="button" onClick={uploadFile}>
            ارسال
          </button>
        </label>
      </div>

      <button type="submit" className="button m-3">
        ذخیره اطلاعات
      </button>
    </form>
  );
}

export default CategoryForm;
