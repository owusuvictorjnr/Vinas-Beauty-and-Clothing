import React from "react";
import { GoDotFill } from "react-icons/go";

const SlidingText = () => {
  return (
    <div className="slider-container bg-black/10 mb-10 w-full min-h-[15vh] overflow-hidden">
      <div className="slider-content space-x-10 capitalize font-semibold flex justify-center mt-12 text-3xl items-center">
        <div className="slider-text flex space-x-10 gap-28">
          100% secure payment <GoDotFill className="mt-1" />
        </div>
        <div className="slider-text flex  gap-28">
          Free worldwide shipping <GoDotFill className="mt-1" />
        </div>
        <div className="slider-text flex  gap-28">
          24/7 customer support <GoDotFill className="mt-1" />
        </div>
        <div className="slider-text flex  gap-28">
          Satisfaction guaranteed <GoDotFill className="mt-1" />
        </div>
      </div>
    </div>
  );
};

export default SlidingText;
