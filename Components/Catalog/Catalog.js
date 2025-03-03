"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import gsap from "gsap";
import "./catalog.css";
import { PlayCircle } from "@mui/icons-material";

import Btn from "@/Shared/Btn";

const Catalog = () => {
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
        Click on catalog
      </div>
      <div className="container" id="one" onClick={handleClick}>
        <div className="left-side">
          <div className="front">
            <div className="content">
              <Image
                src={""}
                alt="pic"
                className="!w-full !h-full object-contain"
              />
            </div>
          </div>
          <div className="back">
            <div className="content">
              <Image
                src={""}
                alt="pic"
                className="!w-full !h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="center">
          <div className="center-content content">
            <Image
              src={""}
              alt="pic"
              className="!w-full !h-full object-contain"
            />
          </div>
        </div>
        <div className="right-side">
          <div className="front">
            <div className="content">
              <Image
                src={""}
                alt="pic"
                className="!w-full !h-full object-contain"
              />
            </div>
          </div>
          <div className="back">
            <div className="content">
              <Image
                src={""}
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
              <div>
                {state === "closed" && "1"}
                {state === "half" && "2"}
                {state === "open" && "3"} / 3
              </div>
              page
            </div>
          }
          onClick={() => handleClick()}
          className="!bg-[#f26322] !mt-5"
        />
      </div>
    </div>
  );
};

export default Catalog;
