import { useState, useEffect } from "react";
import Badge from "./badge";
import Carousel from "./carousel";

const slides = ["bg-blue-400", "bg-teal-400", "bg-violet-400", "bg-orange-400"];
const currentIndex = { loop: true };

const Content = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex justify-center">
      <div className="w-[1216px]">
        <div className="flex flex-col justify-center items-center">
          <div className=" overflow-hidden relative w-[1216px] h-[600px] bg-cover bg-center rounded-2xl ">
            <Carousel slides={slides} currentIndex={currentIndex} />
            <div className="rounded-2xl absolute inset-0 bg-[#141624] opacity-40"></div>
            <div className="z-10 relative h-[252px] w-[598px] rounded-xl bg-white flex flex-col gap-[16px] ml-3 mt-[335px]">
              <Badge />
              <div className="text-[#181A2A] text-4xl font-semibold w-[518px] h-[80px] ml-[40px]">
                {slides?.title}
              </div>
              <div className="text-[#97989F] text-base font-normal ml-[40px]">
                {slides?.readable_publish_date}
              </div>
            </div>
          </div>
          <div className=" flex justify-end mt-[11px] ">
            <button
              onClick={() => {
                setCurrentIndex(currentIndex - 1);
              }}
              className="border-2 rounded-md w-[40px] h-[40px] flex items-center justify-center"
            >
              <img src="./images/content/back-icon.png" alt="" />
            </button>
            <button
              onClick={() => {
                setCurrentIndex(currentIndex + 1);
              }}
              className="border-2 rounded-md w-[40px] h-[40px] flex items-center justify-center ml-[9px]"
            >
              <img src="./images/content/forward-icon.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
