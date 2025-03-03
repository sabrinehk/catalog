"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useMediaQuery } from "@mui/material";

import Catalog from "./Catalog";
import Loading from "@/Shared/Loading";
const Book = dynamic(() => import("./Book"), {
  ssr: false,
});

const MainCatalog = () => {
  const mobileSize = useMediaQuery("(max-width:1170px)");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); // شبیه‌سازی لود شدن
  }, []);

  if (loading) {
    return <Loading />;
  }
  return <div>{mobileSize ? <Book /> : <Catalog />}</div>;
};

export default MainCatalog;
