import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col space-y-10 justify-center items-center h-[100vh]">
      <div className="text-center space-y-3">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="text-3xl">Page Not Found</p>
      </div>
      <Link
        to="/"
        className="py-3 px-5 border-[1px] text-[#23BE0A] border-[#23BE0A] text-lg font-semibold rounded-lg transition hover:bg-[#23BE0A] hover:text-white"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
