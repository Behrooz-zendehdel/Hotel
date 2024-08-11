import React from "react";
import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../Hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="sm-max-w-sm flex justify-center items-center pt-10">
      <div className="">
        <h1 className="text-xl font-bold text-secondary-700 mb-8">
          صفحه ای که به دنبالش بودید ، پیدا نشد
        </h1>
        <button onClick={moveBack} className="flex items-center gap-x-2">
          <HiArrowRight className="w-6 h-6 text-primary-900 " />
          <span>برگشت</span>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
