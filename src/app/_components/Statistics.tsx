"use client";
import { Separator } from "@/components/ui/separator";
import { Divide } from "lucide-react";
import React, { useContext } from "react";
import { ScoreContext } from "./ScoreContext";

type Props = {};

const Statistics = (props: Props) => {
  const { rank, percentile, score } = useContext(ScoreContext);
  return (
    <div className="lg:mx-2  sm:mx-2 md:mx-2 xs:mx-0 md:px-5 my-5 border-2 lg:p-5 w-full sm:p-2 xs:p-2 xs:py-4 sm:py-4 rounded-lg flex lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:justify-between md:justify-between sm:gap-y-5 xs:gap-y-5 gap-7 items-center">
      <div className="flex flex-col text-left md:text-left sm:text-center sm:mb-2 justify-center gap-3 w-full">
        <h1 className="font-extrabold">Quick Statistics</h1>
        <div className="flex flex-row md:flex-row md:text-left sm:flex-col justify-between items-center w-full">
          <div className="flex flex-row gap-4 items-center">
            <div className="p-3 rounded-full bg-gray-200">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/color/96/trophy.png"
                alt="trophy"
              />
            </div>
            <div className="flex flex-col justify-center sm:items-center">
              <h1 className="text-lg font-extrabold">{rank}</h1>
              <p className="text-md text-gray-500">YOUR RANK</p>
            </div>
          </div>
          <Separator
            className="bg-gray-200 sm:h-0 sm:my-2  h-20 my-auto"
            orientation="vertical"
          />
          <div className="flex flex-row gap-4 items-center">
            <div className="p-3 rounded-full bg-gray-200">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/color/36/task--v1.png"
                alt="task--v1"
              />
            </div>
            <div className="flex flex-col justify-center sm:items-center">
              <h1 className="text-lg font-extrabold">{percentile}%</h1>
              <p className="text-md text-gray-500">PERCENTILE</p>
            </div>
          </div>
          <Separator
            className="bg-gray-200 sm:h-0 sm:my-2  h-20 my-auto"
            orientation="vertical"
          />
          <div className="flex flex-row gap-4 items-center">
            <div className="p-3 rounded-full bg-gray-200">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/glyph-neue/64/40C057/checked-checkbox.png"
                alt="checked-checkbox"
              />
            </div>
            <div className="flex flex-col justify-center sm:items-center">
              <h1 className="text-lg font-extrabold">{score}/15</h1>
              <p className="text-md text-gray-500">CORRECT ANSWER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
