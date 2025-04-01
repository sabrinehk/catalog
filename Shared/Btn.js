import React from "react";
import { Button } from "@mui/material";

const Btn = ({ text , onClick = () => {}, disable = false, className="" }) => {
  return (
    <Button
      variant="contained"
      disabled={disable}
      className={`!bg-[#00305f] md:!text-sm text-xs flex justify-center items-center !rounded-full min-w-fit max-w-full ${className && className}`}
      onClick={onClick}
      sx={{
        fontFamily: "'IranSans', sans-serif", // Apply the custom font here
      }}
    >
      {text}
    </Button>
  );
};

export default Btn;
