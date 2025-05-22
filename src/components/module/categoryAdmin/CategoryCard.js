import { DeleteCategories } from "@/services/category/DeleteCategories";
import { EditCategories } from "@/services/category/EditCategory";
import { QueryKeys } from "@/utils/QueryKey";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

function CategoryCard({ title, content, image, url, id }) {
  const queryClient = useQueryClient();
  const [activeIndex, setActiveIndex] = useState(null);
  const [form, setForm] = useState({
    title,
    content,
    image,
    url,
  });

  const editMutation = useMutation({
    mutationFn: EditCategories,
    onSuccess: () => {
      toast.success("اطلاعات دسته بندی با موفقیت به‌روزرسانی شد");
      queryClient.invalidateQueries([QueryKeys.ADMIN_CATEGORY]);
      setActiveIndex(null); // Close the edit panel
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const clickHandler = async (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  const handleSubmit = () => {
    editMutation.mutate({ id, formData: form });
  };

  const { mutate: deleteMutation } = useMutation({
    mutationFn: DeleteCategories,
    onSuccess: () => {
      toast.success("دسته بندی با موفقیت حذف شد");
      queryClient.invalidateQueries([QueryKeys.ADMIN_CATEGORY]);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <div>
      <div className="flex justify-between items-center p-7 bg-mainGray">
        <div className="flex items-center gap-5">
          <p>
            عنوان <span className="text-[#606060]">{title}</span>
          </p>
          <p>
            توضیحات<span className="text-[#606060]">{content}</span>
          </p>
          <p>
            تصویر<span className="text-[#606060]">{image}</span>
          </p>
          <p>
            ادرس<span className="text-[#606060]">{url}</span>
          </p>
        </div>
        <div className="flex gap-5">
          <button onClick={() => clickHandler(id)} className="editButton">
            ویرایش
          </button>
          <button onClick={() => deleteMutation(id)} className="deleteButton">
            حذف
          </button>
        </div>
      </div>
      <div className={`panel ${activeIndex === id ? "block" : "hidden"}`}>
        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          عنوان{" "}
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
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
          توضیحات
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
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
          ادرس{" "}
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
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
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3"></div>
        </label>
        <button onClick={handleSubmit} className="button">
          ثبت
        </button>
      </div>
    </div>
  );
}

export default CategoryCard;
