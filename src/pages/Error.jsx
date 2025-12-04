import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-2">
          {/* Large 404 Text */}
          <h1 className="text-8xl sm:text-9xl font-[var(--bg)] text-[var(--heading)] tracking-tighter select-none">
            404
          </h1>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading)] tracking-tight">
            Page not found
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-400">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={() => navigate("/")}
            className="group inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[var(--heading)] bg-green-600 hover:bg-green-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-offset-[#111111]"
          >
            <ArrowRight className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
            Go back home
          </button>
        </div>

        {/* Footer / Support Link */}
        <div className="pt-12 relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#111111] px-4 text-sm text-gray-500">
              If you think this is a mistake, please{" "}
              <button className="text-gray-400 hover:text-[var(--heading)] underline transition-colors focus:outline-none cursor-pointer">
                contact support
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
