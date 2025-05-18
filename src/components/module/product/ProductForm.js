"use client";

import { getCategories } from "@/services/category/AllCategoryApi";
import { getProducts } from "@/services/product/AllProduct";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

function ProductFrom() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    thumbnail: "",
    price: 0,
    discount: 0,
    category: "",
    images: [],
    url: "",
  });
  const [files, setFiles] = useState();

  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    onError: (error) => {
      toast.error(error.message);
    },
    staleTime: 3600,
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!files) {
      toast.error("لطفا یک تصویر انتخاب کنید");
      return;
    }

    try {
      const formData = new FormData();
      Array.from(files).forEach((file) => {
        formData.append("files", file);
      });
      const uploadResponse = await fetch("http://localhost:3100/upload-files", {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const uploadData = await uploadResponse.json();

      const uploadedFiles = Array.isArray(uploadData.fileNames)
        ? uploadData.fileNames
        : [uploadData.fileNames];

      const productResponse = await fetch("http://localhost:3100/product", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          images: [...form.images, ...uploadedFiles], // Now always array
        }),
      });

      const productData = await productResponse.json();

      if (productData.error) {
        toast.error(productData.message);
      } else {
        toast.success("محصول با موفقیت ساخته شد");
        setForm({
          title: "",
          content: "",
          thumbnail: "",
          price: 0,
          discount: 0,
          category: "",
          images: [],
          url: "",
        });
        await queryClient.invalidateQueries({ queryKey: ["products"] });
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
          توضیحات عکس{" "}
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/call.svg" width={24} height={24} />
            <input
              id="thumbnail"
              type="text"
              value={form.thumbnail}
              onChange={(e) => setForm({ ...form, thumbnail: e.target.value })}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
          </div>
        </label>

        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          قیمت{" "}
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/key.svg" width={24} height={24} />
            <input
              required
              id="price"
              type="number"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
          </div>
        </label>
        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          تخفیف{" "}
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/key.svg" width={24} height={24} />
            <input
              id="discount"
              type="number"
              value={form.discount}
              onChange={(e) => setForm({ ...form, discount: e.target.value })}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
          </div>
        </label>
        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          ادرس اینترنتی{" "}
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/key.svg" width={24} height={24} />
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
          تصویر
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/key.svg" width={24} height={24} />
            <input
              id="image"
              type="file"
              onChange={(e) => setFiles(e.target.files)}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
              multiple
            />
          </div>
        </label>

        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          دسته بندی{" "}
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <Image alt="" src="/personal/home.svg" width={24} height={24} />
            <select
              name="category"
              id="category"
              value={form.category || ""}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            >
              <option value="">انتخاب دسته بندی</option>
              {data?.productCategories?.map((i) => (
                <option key={i._id} value={i._id}>
                  {i.title}
                </option>
              ))}{" "}
            </select>
          </div>
        </label>
      </div>

      <button type="submit" className="button m-3">
        ذخیره اطلاعات
      </button>
    </form>
  );
}

export default ProductFrom;
