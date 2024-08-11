import React, { useState } from "react";
import TextField from "../../Hooks/TextField";
import RadioInput from "../../UI/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../Services/authService";
import Loader from "../../UI/Loader";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function CompleteProfileFrom() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAysnc({ name, role, email });
      toast.success(message);
      if (!user.status !== 2) {
        navigate("/");
        toast.error("پروفایل شما در انتظار تایید است ", { icon: "👏" });
        return;
      }
      if (user.role === "OWENER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

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
          {!isPending ? (
            <Loader />
          ) : (
            <button className="btn btn--primary w-full">تایید</button>
          )}
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileFrom;
