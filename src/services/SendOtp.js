import api from "@/configs/api";

export const sendOtp = async (mobile) => {
  try {
    const response = await api.post("/api/auth/SignUp", { mobile });
    console.log("response:", response);
    return { response };
  } catch (error) {
    return { error };
  }
};
