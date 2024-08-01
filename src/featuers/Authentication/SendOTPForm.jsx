import React, { useState } from "react";
import TextField from "../../Hooks/TextField";
import { Mutation, useMutation, useQuery } from "@tanstack/react-query";
import { getOtp } from "../../Services/authService";
import { toast } from "react-hot-toast";
import Loader from "../../UI/Loader";
function SendOTPForm({ setStep }) {
  const { isPending, isError, data, mutateAsync } = useMutation({
    MutationFn: getOtp,
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  const sendOtpHandler = async (e) => {
    e.preventDefualt();
    try {
      const data = await mutateAsync({ phoneNumber });
      setStep(2);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="">
      <form action="" className="space-y-8" onSubmit={sendOtpHandler}>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <div>
          {!isPending ? (
            <Loader />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
