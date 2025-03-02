import { useState } from "react";

const OtpInput = ({ length, onChangeOtp }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleChange = (element, index) => {
    const value = element.value;
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < length - 1 && value) {
      element.nextSibling.focus();
    }

    onChangeOtp(newOtp.join(""));
  };

  const handleBackspace = (element, index) => {
    const newOtp = [...otp];
    newOtp[index] = "";
    setOtp(newOtp);

    if (index > 0) {
      element.previousSibling.focus();
    }

    onChangeOtp(newOtp.join(""));
  };

  return (
    <div className="flex flex-row-reverse">
      {otp.map((data, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={data}
          className={`w-14 h-14 border-[1px] mr-5 text-2xl text-medium rounded-xl text-center bg-gray-100 text-main outline-none ${
            data ? "border-main" : "border-none"
          }`}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => {
            if (e.key === "Backspace") {
              handleBackspace(e.target, index);
            }
          }}
        />
      ))}
    </div>
  );
};

export default OtpInput;
