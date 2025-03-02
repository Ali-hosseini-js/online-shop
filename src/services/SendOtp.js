import api from "@/configs/api";

export const sendOtp = async (mobile) => {
  try {
    const response = await api.post("", { mobile });
    return { response };
  } catch (error) {
    return { error };
  }
};
