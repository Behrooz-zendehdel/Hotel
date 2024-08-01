import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../Services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
const RESEND_TIME = 90;

function CheckOTPForm({ phoneNumber, onBack, onResendOtp }) {
  const navigate = useNavigate();
  const [time, setTime] = useState(RESEND_TIME);
  const [otp, setOtp] = useState("");
  const { isPending, error, data, mutateAysnc } = useMutation({
    mutationFn: checkOtp,
  });
  const checkOtpHandler = async (e) => {
    e.preverntDefault();
    try {
      const { user, message } = await mutateAysnc({ phoneNumber, otp });
      toast.success(message);
      if (user.isActive) {
        if (user.role === "OWNER") navigate("/owner");
        if (user.role === "FREELANCER") navigate("/freelancer");
      } else {
        navigate("/compelete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);
  return (
    <div>
      <button onClick={onBack}>
        <HiArrowRight className="w-6 h-6 text-secondary-500" />
      </button>
      <div className="mb-4">
        {time > 0 ? (
          <p>{time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button onClick={onResendOtp} className="btn btn--secondary">
            ارسال مجدد کد
          </button>
        )}
      </div>
      <form className="space-y-8" onSubmit={checkOtpHandler}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center "
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-300",
            borderRadius: "0.5rem",
          }}
        />
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
