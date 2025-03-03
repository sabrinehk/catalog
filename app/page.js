import React from "react";
import MainCatalog from "@/components/Catalog/MainCatalog.js";

export const generateMetadata = () => {
  return {
    title: "Catalog",
    description: "Catalog",
    keywords: "Catalog",
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
