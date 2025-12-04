import React from "react";
import winnerImg from "../assets/images/winners.jpeg";
import closeImg from "../assets/images/close.png";

export const PopUp = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-[5px] transition-opacity duration-300 animate-in fade-in">
      <div className="relative w-[85%] max-w-5xl bg-transparent rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-sm:w-[95%]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-1.5 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
          aria-label="Close popup"
        >
          <img className="w-[20px] p-1" src={closeImg} alt="" />
        </button>

        <div className="relative w-full aspect-video sm:aspect-auto sm:h-[60vh] md:h-[70vh] bg-gray-200">
          <img
            src={winnerImg}
            alt="Winner Announcement"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[50%] z-20 max-sm:bottom-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-5 flex flex-col items-center justify-center text-center gap-4 border border-gray-100 max-sm:gap-1 max-sm:p-2">
            <h3 className=" font-bold text-gray-800 leading-tight max-sm:text-[10px]">
              We are the winner of Google Cloud for Startup 2024
            </h3>
            <button
              onClick={onClose}
              className="px-8 py-1 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-md transition-all hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 max-sm:px-4 max-sm:text-[10px]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
