// pages/swagger.tsx
import React from "react";
import SwaggerUIComponent from "../../components/ui/swaggerUI";
import "../../app/globals.css";
import router from "next/router";
import Navbar from "@/components/ui/navBar";

const SwaggerPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto p-4">
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={() => router.push("/")}
            className="mb-4 px-4 py-2 bg-[#0000ff] text-white rounded hover:bg-blue-600 transition-colors"
          >
            &#8592; Back to List
          </button>
          <p className="mt-8 text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-slate-800">
            Supply Chain Hub API Documentation
          </p>
        </div>
        <SwaggerUIComponent />
      </div>
    </div>
  );
};

export default SwaggerPage;
