import React from "react";
import MainCatalog from "@/components/Catalog/MainCatalog.js";

export const generateMetadata = () => {
  return {
    title: "کاتالوگ",
    description: "کاتالوگ شاتل",
    keywords: "کاتالوگ شاتل",
    robots: "noindex, nofollow", // Add noindex, nofollow
  };
};
const page = () => {
  return (
    <>
      <MainCatalog />
    </>
  );
};

export default page;
