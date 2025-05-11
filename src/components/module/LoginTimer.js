import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { e2p } from "@/utils/replaceNumber";

function LoginTimer({ mobile }) {
  const [timer, setTimer] = useState(e2p("2:00"));
  const [timeLeft, setTimeLeft] = useState(120);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          clearInterval(countdown);
          return setIsRunning(false);
        }

        const minutes = Math.floor(prevTimeLeft / 60);
        const seconds = prevTimeLeft % 60;
        setTimer(e2p(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`));
        return prevTimeLeft - 1;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(countdown);
  }, [isRunning]);

  const sendOTP = async (event) => {
    event.preventDefault();
    event.preventDefault();
    const res = await fetch(`http://localhost:3100/auth/resend`, {
      method: "POST",
      body: JSON.stringify({ mobile }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data.code);

    if (data.error) {
      toast.error(data.message);
    } else {
      toast.success(data.code);
    }
    setIsRunning(true);
    setTimeLeft(120);
    setTimer(e2p("2:00"));
  };

  return (
    <div>
      {isRunning ? (
        timer
      ) : (
        <button onClick={sendOTP} className="text-main underline-offset-8">
          کد تایید دوباره ارسال گردد؟
        </button>
      )}
    </div>
  );
}

export default LoginTimer;
