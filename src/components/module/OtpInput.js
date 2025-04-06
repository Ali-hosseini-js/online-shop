import { useState, useEffect, useRef } from "react";

const OtpInput = ({ length, onChangeOtp }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const firstInputRef = useRef(null);

  useEffect(() => {
    // Focus on first input when component mounts
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  const handleChange = (element, index) => {
    const value = element.value;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < length - 1) {
      element.nextSibling.focus();
    }

    onChangeOtp(newOtp.join(""));
  };

  const handleBackspace = (element, index) => {
    if (otp[index] === "") {
      // Only move back if current input is empty
      if (index > 0) {
        element.previousSibling.focus();
      }
    } else {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      onChangeOtp(newOtp.join(""));
    }
  };

  return (
    <div className="flex flex-row-reverse">
      {otp.map((data, index) => (
        <input
          key={index}
          ref={index === 0 ? firstInputRef : null}
          type="text"
          maxLength="1"
          value={data}
          className={`w-14 h-14 border-[1px] mr-5 text-2xl text-medium rounded-xl text-center bg-gray-100 text-main outline-none ${
            data ? "border-main" : "border-none"
          }`}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => {
            if (e.key === "Backspace") {
              e.preventDefault(); // Prevent default backspace behavior
              handleBackspace(e.target, index);
            }
          }}
          onFocus={(e) => e.target.select()}
        />
      ))}
    </div>
  );
};

export default OtpInput;
