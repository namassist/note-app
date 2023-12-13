import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-gray-800 text-center space-y-2">
        <h4 className="text-lg animate-pulse">404 Not Found</h4>
        <Link to="/" className="underline">
          Kembali
        </Link>
      </div>
    </div>
  );
};
