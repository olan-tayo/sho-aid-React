import { Cancel } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

type ToastType = {
  position?: string;
  time?: number;
  type?: string;
};

const Toast = ({ position, time, type }: ToastType) => {
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    setTimeout(
      () => {
        setIsClosed(true);
      },
      time ? time : 3000
    );
  }, [time]);
  return (
    <div>
      {isClosed ? null : (
        <div
          className={`absolute z-[1000] w-fit  text-white text-sm rounded-md px-4 py-2 ${
            type === "success"
              ? "bg-[#2ecc71]"
              : type === "error"
              ? "bg-[#e74c3c]"
              : type === "info"
              ? "bg-[#3498db]"
              : type === "warning"
              ? "bg-[#FFA500]"
              : type === "default"
              ? "bg-black"
              : "bg-black"
          }  ${
            position === "top-center"
              ? "right-1/2 top-0  mt-2"
              : position === "top-left"
              ? "left-[20px] top-0  mt-2 "
              : position === "top-right"
              ? "right-[20px] top-0  mt-2"
              : position === "bottom-left"
              ? "bottom-0 left-[20px] mb-2"
              : position === "bottom-right"
              ? "bottom-0 right-[20px]  mb-2 "
              : position === "bottom-center"
              ? "right-1/2 bottom-0  mb-2"
              : "right-1/2 top-0  mt-2"
          }`}
        >
          <div className="flex justify-between items-center gap-5">
            <p>I am a toast</p>
            <Cancel
              onClick={() => setIsClosed(true)}
              className="cursor-pointer"
              style={{ fontSize: "16px" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Toast;
