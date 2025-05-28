import { DeleteUsers } from "@/services/user/DeleteUser";
import { EditUsers } from "@/services/user/EditUser";
import { QueryKeys } from "@/utils/QueryKey";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

function UserCard({ firstName, lastName, mobile, role, id }) {
  const queryClient = useQueryClient();
  const [activeIndex, setActiveIndex] = useState(null);
  const [form, setForm] = useState({
    firstName,
    lastName,
    mobile,
    role,
  });

  const editMutation = useMutation({
    mutationFn: EditUsers,
    onSuccess: () => {
      toast.success("اطلاعات کاربر با موفقیت به‌روزرسانی شد");
      queryClient.invalidateQueries([QueryKeys.ADMIN_USER]);
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
    mutationFn: DeleteUsers,
    onSuccess: () => {
      toast.success("کاربر با موفقیت حذف شد");
      queryClient.invalidateQueries([QueryKeys.ADMIN_USER]);
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
            نام و نام خانوادگی{" "}
            <span className="text-[#606060]">
              {firstName} {lastName}
            </span>
          </p>
          <p>
            موبایل <span className="text-[#606060]">{mobile}</span>
          </p>
          <p>
            نقش کاربر <span className="text-[#606060]">{role}</span>
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
          نام
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <input
              type="text"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
          </div>
        </label>
        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          نام خانوادگی
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <input
              type="text"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
          </div>
        </label>

        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          شماره همراه
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <input
              type="tel"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            />
          </div>
        </label>

        <label className="flex flex-col gap-3 text-[#606060] text-xl pr-6 p-3">
          سطح دسترسی
          <div className="flex items-center p-6 bg-mainGray rounded-lg w-[390px] h-[72px] gap-3">
            <select
              name="role"
              id="roles"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="bg-inherit outline-none text-[#606060] text-xl w-full"
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="copyRighter">CopyRighter</option>
            </select>
          </div>
        </label>
        <button onClick={handleSubmit} className="button">
          ثبت
        </button>
      </div>
    </div>
  );
}

export default UserCard;
