import React, { useState } from "react";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div className="">
      <form action="" className="space-y-8">
        <div>
          <label className="mb-1" htmlFor="PhoneNumber">
            شماره موبایل
          </label>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            id="PhoneNumber"
            className="textField__input"
            type="text"
          />
        </div>
        <button className="PX-4 py-3 font-bold bg-primary-900 text-white w-full rounded-2xl  transition-all duration-300 hover:bg-primary-800 shadow-lg shadow-primary-300 ">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
