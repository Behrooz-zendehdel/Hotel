import React, { useState } from "react";
import TextField from "../../Hooks/TextField";
import RadioInput from "../../UI/RadioInput";

function CompleteProfileFrom() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handelSubmit (e)=>{
    e.preventDefault();
    

  }
  return (

    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" action="" onSubmit={handelSubmit}>
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            label="ایمیل "
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="flex items-center justify-center gap-x-8 ">
            <RadioInput
              label="کارفرما"
              value="OWNER"
              onChange={(e) => setRole(e.target.value)}
              id="OWNER"
              name="role"
              checked={role === "owner"}
            />
            <RadioInput
              label="فریلنسر"
              id="FREELANCER"
              name="role"
              value="FREELANCER"
              checked={role === "FREELANCER "}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <button className="btn btn--primary w-full">تایید</button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileFrom;
