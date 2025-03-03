"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import gsap from "gsap";
import "./catalog.css";
import { Login, PlayCircle } from "@mui/icons-material";

import Btn from "@/Shared/Btn";
import pic1 from "@/public/Images/catalog/PC-350x700-03.jpg";
import pic2 from "@/public/Images/catalog/PC-350x700-05.jpg";
import pic3 from "@/public/Images/catalog/PC-350x700-04.jpg";
import pic4 from "@/public/Images/catalog/PC-350x700-02.jpg";
import pic5 from "@/public/Images/catalog/PC-350x700-01.jpg";

const Catalog = () => {
  const router = useRouter();
  const [state, setState] = useState("closed");
  useEffect(() => {
    gsap.set(".center-content", { opacity: 0 });
  }, []);

  const handleClick = () => {
    let tl = gsap.timeline();
    let left = document.querySelector(".left-side");
    let right = document.querySelector(".right-side");
    let centerContent = document.querySelector(".center-content");

    if (state === "closed") {
      gsap.to(right, { rotateY: -20, duration: 0.2 });
      setState("half");
      tl.set(centerContent, { opacity: 0 });
    } else if (state === "half") {
      gsap.to(left, { rotateY: 20, duration: 0.2 });
      setState("open");
      tl.to(centerContent, { duration: 1, opacity: 1 });
    } else {
      gsap.to(right, { rotateY: -180, duration: 0.2 });
      gsap.to(left, { rotateY: 180, duration: 0.2 });
      tl.set(centerContent, { opacity: 0 });
      setState("closed");
    }
  };
  return (
    <div
      dir="ltr"
      className="bg-gray-900 flex justify-center items-center flex-col h-screen w-screen overflow-hidden"
    >
      <div className="header text-xs opacity-50 !text-white">
        برای باز شدن بروشور کلیک کنید
      </div>
      <div className="container" id="one" onClick={handleClick}>
        <div className="left-side">
          <div className="front">
            <div className="content">
              <Image
                src={pic2}
                alt="pic"
                className="!w-full !h-full object-contain"
              />
            </div>
          </div>
          <div className="back">
            <div className="content">
              <Image
                src={pic1}
                alt="pic"
                className="!w-full !h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="center">
          <div className="center-content content">
            <Image
              src={pic3}
              alt="pic"
              className="!w-full !h-full object-contain"
            />
          </div>
        </div>
        <div className="right-side">
          <div className="front">
            <div className="content">
              <Image
                src={pic4}
                alt="pic"
                className="!w-full !h-full object-contain"
              />
            </div>
          </div>
          <div className="back">
            <div className="content">
              <Image
                src={pic5}
                alt="pic"
                className="!w-full !h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Btn
          text={
            <div className="flex gap-2">
              <PlayCircle />
              <div>{state === "closed" && "۱"}{state === "half" && "۲"}{state === "open" && "۳"} / ۳</div>
              نمایش
            </div>
          }
          onClick={() => handleClick()}
          className="!bg-[#f26322] !mt-5"
        />
        <Btn
          text={
            <div className="flex gap-2">
              <Login />
              دریافت سرویس
            </div>
          }
          onClick={() => {
            router.push(
              "https://www.shatel.ir/internet-services/towers-special-services/"
            );
          }}
          className="!bg-[#f26322] !mt-5"
        />
      </div>
    </div>
  );
};

export default Catalog;
