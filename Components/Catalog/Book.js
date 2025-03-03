"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import HTMLFlipBook from "react-pageflip";

import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";

const Book = () => {
  const [bookSize, setBookSize] = useState({ width: 300, height: 500 });
  const bookRef = useRef(null);

  useEffect(() => {
    const updateSize = () => {
      const screenWidth = window.innerWidth;

      let width = Math.max(300, Math.min(380, screenWidth * 0.9));
      let height = width * 2;

      if (height > 500) {
        height = 500;
        width = height / 2;
      }

      setBookSize({ width, height });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900 p-2 overflow-hidden">
      <div className="mb-5 text-xs opacity-50 !text-white">
        Click or turn the page
      </div>
      <div className="w-full max-w-[90vw] relative max-h-[500px] flex justify-center items-center">
        <HTMLFlipBook
          ref={bookRef}
          width={bookSize.width}
          height={bookSize.height}
          size="fixed"
          minWidth={300}
          maxWidth={380}
          minHeight={500}
          maxHeight={500}
          startPage={4}
        >
          {["", "", "", "", ""].map((pic, index) => (
            <div key={index} className="demoPage">
              <Image
                src={""}
                alt={`Page ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      {/* Navigation Buttons */}
      <div className="flex w-full max-w-[90vw] justify-between absolute gap-4 mt-4">
        <button
          onClick={() => bookRef.current?.pageFlip().flipNext()}
          className="p-2 bg-gray-700 text-white rounded-md shadow-md hover:bg-gray-600"
        >
          <KeyboardDoubleArrowRight />
        </button>
        <button
          onClick={() => bookRef.current?.pageFlip().flipPrev()}
          className="p-2 bg-gray-700 text-white rounded-md shadow-md hover:bg-gray-600"
        >
          <KeyboardDoubleArrowLeft />
        </button>
      </div>
    </div>
  );
};

export default Book;
