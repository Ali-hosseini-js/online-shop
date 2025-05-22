import { DeleteShipping } from "@/services/shipping/DeleteShipping";
import { EditShipping } from "@/services/shipping/EditShipping";
import { QueryKeys } from "@/utils/QueryKey";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

function ShippingCard({ title, price, freeShippingThreshold, id }) {
  const queryClient = useQueryClient();
  const [activeIndex, setActiveIndex] = useState(null);
  const [form, setForm] = useState({
    title,
    price,
    freeShippingThreshold,
  });

  const editMutation = useMutation({
    mutationFn: EditShipping,
    onSuccess: () => {
      toast.success("شیوه ارسال با موفقیت به‌روزرسانی شد");
      queryClient.invalidateQueries([QueryKeys.ADMIN_SHIPPING]);
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
    mutationFn: DeleteShipping,
    onSuccess: () => {
      toast.success("شیوه ارسال با موفقیت حذف شد");
      queryClient.invalidateQueries([QueryKeys.ADMIN_SHIPPING]);
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
            هزینه <span className="text-[#606060]">{price}</span>
          </p>
          <p>
            حداقل هزینه ارسال رایگان
            <span className="text-[#606060]">{freeShippingThreshold}</span>
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
          هزینه{" "}
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <input
              id="price"
              type="number"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
          </div>
        </label>

        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          حداقل هزینه ارسال رایگان
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <input
              id="freeShippingThreshold"
              type="number"
              value={form.freeShippingThreshold}
              onChange={(e) =>
                setForm({ ...form, freeShippingThreshold: e.target.value })
              }
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

export default ShippingCard;
