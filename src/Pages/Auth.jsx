import React from "react";
import SendOTPForm from "../featuers/Authentication/SendOTPForm";
import CheckOTPForm from "../featuers/Authentication/CheckOTPForm";
function Auth() {
  return (
    <div className="flex justify-center pt-10">

    <div className="w-full sm:max-w-sm">
      <SendOTPForm />
      <CheckOTPForm />
    </div>
    </div>
  );
}

export default Auth;
