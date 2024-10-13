import { useState } from "react";
import "@/../public/assets/fonts/font.css";
import { Arcodion } from "@/components/ui/arcodion";

const dates = [
  { date: 5, day: "TUE" },
  { date: 6, day: "WED" },
  { date: 7, day: "THU" },
];

export default function TimeTable() {
  const [selectedDateIndex, setSelectedDateIndex] = useState<number>(0);

  const handleDateClick = (index: number) => {
    setSelectedDateIndex(index);
  };

  return (
    <div className="h-screen w-screen px-7 flex flex-col font-pretendard">
      <div className="flex justify-center items-center">
        <h1 className="text-main text-3xl font-bold">타임테이블</h1>
      </div>
      <div className="flex flex-row gap-3 justify-center items-center mt-20 mb-10">
        {dates.map((item, index) => {
          const isSelected = selectedDateIndex === index;
          const circleClasses = `flex flex-col justify-center rounded-full ${
            isSelected ? "w-16 h-16 bg-main" : "w-12 h-12 bg-white"
          }`;

          const dateClasses = `block font-bold leading-none ${
            isSelected ? "text-4xl" : "text-2xl"
          }`;

          const dayClasses = `block font-normal ${
            isSelected ? "text-sm" : "text-xs"
          }`;

          return (
            <div
              key={index}
              className={circleClasses}
              onClick={() => handleDateClick(index)}
            >
              <div className="text-center">
                <span className={dateClasses}>{item.date}</span>
                <span className={dayClasses}>{item.day}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mb-10">
        <div className="font-neurimbo text-white font-xl flex justify-center mb-3">
          TIME TABLE
        </div>
        <Arcodion />
      </div>
      <div className="">
        <div className="font-neurimbo text-white font-xl flex justify-center mb-3">
          SPECIAL GUEST
        </div>
      </div>
    </div>
  );
}