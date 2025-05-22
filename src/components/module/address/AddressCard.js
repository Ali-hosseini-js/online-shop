import { DeleteAddress } from "@/services/address/DeleteAddress";
import { EditAddress } from "@/services/address/EditAddress";
import { QueryKeys } from "@/utils/QueryKey";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

function AddressCard({ content, id }) {
  const queryClient = useQueryClient();
  const [activeIndex, setActiveIndex] = useState(null);
  const [form, setForm] = useState({
    content,
  });

  const editMutation = useMutation({
    mutationFn: EditAddress,
    onSuccess: () => {
      toast.success("آدرس با موفقیت به‌روزرسانی شد");
      queryClient.invalidateQueries([QueryKeys.ADMIN_ADDRESS]);
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
    mutationFn: DeleteAddress,
    onSuccess: () => {
      toast.success("آدرس با موفقیت حذف شد");
      queryClient.invalidateQueries([QueryKeys.ADMIN_ADDRESS]);
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
            آدرس <span className="text-[#606060]">{content}</span>
          </p>
        </div>
        <div className="flex gap-5">
          <button onClick={() => clickHandler(id)} className="editButton">
            ویرایش
          </button>
          <button
            onClick={() => deleteMutation(id)}
            disabled={editMutation.isLoading}
            className="deleteButton"
          >
            حذف
          </button>
        </div>
      </div>
      <div className={`panel ${activeIndex === id ? "block" : "hidden"}`}>
        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          آدرس
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
        <button onClick={handleSubmit} className="button">
          ثبت
        </button>
      </div>
    </div>
  );
}

export default AddressCard;
