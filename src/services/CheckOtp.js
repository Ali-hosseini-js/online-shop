import api from "@/configs/api";

export const checkOtp = async (mobile, otp) => {
  try {
    const response = await api.post("/api/auth/SignIn", { mobile, otp });
    return { response };
  } catch (error) {
    return { error };
  }
};
