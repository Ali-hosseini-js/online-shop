import { DeleteProduct } from "@/services/product/DeleteProduct";
import { EditProduct } from "@/services/product/EditProduct";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

function ProductCard({ title, price, discount, stock, id }) {
  const queryClient = useQueryClient();
  const [activeIndex, setActiveIndex] = useState(null);
  const [form, setForm] = useState({
    title,
    price,
    discount,
    stock,
  });

  const editMutation = useMutation({
    mutationFn: EditProduct,
    onSuccess: () => {
      toast.success("محصول با موفقیت بروز رسانی گردید");
      queryClient.invalidateQueries(["products"]);
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
    console.log(id);
    editMutation.mutate({ id, formData: form });
  };

  const { mutate: deleteMutation } = useMutation({
    mutationFn: DeleteProduct,
    onSuccess: () => {
      toast.success("محصول با موفقیت حذف گردید");
      queryClient.invalidateQueries(["products"]);
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
            قیمت<span className="text-[#606060]">{price}</span>
          </p>
          <p>
            تخفیف<span className="text-[#606060]">{discount}</span>
          </p>
          <p>
            تعداد<span className="text-[#606060]">{stock}</span>
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
          قیمت{" "}
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <input
              id="content"
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
            <input
              id="url"
              type="number"
              value={form.discount}
              onChange={(e) => setForm({ ...form, discount: e.target.value })}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
          </div>
        </label>

        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          تعداد{" "}
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <input
              id="url"
              type="number"
              value={form.stock}
              onChange={(e) => setForm({ ...form, stock: e.target.value })}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
          </div>
        </label>
        <button onClick={handleSubmit} className="button">
          ثبت
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
