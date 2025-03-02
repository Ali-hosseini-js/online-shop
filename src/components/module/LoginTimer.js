import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { e2p } from "@/utils/replaceNumber";

function LoginTimer({ mobile }) {
  const [timer, setTimer] = useState(e2p("3:00"));
  const [timeLeft, setTimeLeft] = useState(180);
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

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ mobile }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data.message);

    toast.success(data.message);
    setIsRunning(true);
    setTimeLeft(180);
    setTimer("3:00");
  };

  return (
    <div>
      <p>
        {isRunning ? (
          timer
        ) : (
          <button onClick={sendOTP} className="text-main underline-offset-8">
            کد تایید دوباره ارسال گردد؟
          </button>
        )}
      </p>
    </div>
  );
}

export default LoginTimer;
