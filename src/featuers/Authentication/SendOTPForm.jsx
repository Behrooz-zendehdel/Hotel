import React, { useState } from "react";
import TextField from "../../Hooks/TextField";
import { Mutation, useMutation, useQuery } from "@tanstack/react-query";
import { getOtp } from "../../Services/authService";
import { toast } from "react-hot-toast";
import Loader from "../../UI/Loader";
function SendOTPForm({ onSubmit, isSendingOtp, phoneNumber, onChange }) {
  return (
    <div className="">
      <form action="" className="space-y-8" onSubmit={onSubmit}>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
        />
        <div>
          {!isSendingOtp ? (
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
