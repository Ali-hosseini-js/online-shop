import api from "@/configs/api";

const checkOtp = async (mobile, otp) => {
  try {
    const response = await api.post("", { mobile, otp });
    return { response };
  } catch (error) {
    return { error };
  }
};

export default checkOtp;
