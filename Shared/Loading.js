import { CircularProgress } from "@mui/material";

const Loading = () => {
    return (
      <div className="flex flex-col !w-full gap-4 justify-center items-center min-h-screen">
        <CircularProgress />
        <p className="text-sm opacity-50">Loading...</p>
      </div>
    );
  };
  
  export default Loading;
  