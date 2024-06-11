"use client";
import React, { useContext } from "react";

import Line from "./Line";
import { ScoreContext } from "./ScoreContext";

type Props = {};

const Graph = (props: Props) => {
  const { percentile } = useContext(ScoreContext);

  return (
    <div className="lg:mx-2 sm:mx-2 md:mx-2 xs:mx-0 md:px-8 my-5 border-2 lg:p-5 w-full sm:p-5  sm:mb-5 xs:p-2 xs:py-4 sm:py-4 rounded-lg flex lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:justify-between md:justify-between sm:gap-y-5 xs:gap-y-5 gap-7 items-center">
      <div className="flex flex-col text-left justify-center gap-3 w-full">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="font-extrabold mb-4">Comparison Graph</h1>
            <p className="text-gray-700 ">
              <span className="font-bold">
                You scored {percentile}% percentile
              </span>{" "}
              which is lower than the <br /> average 72% of all the engineers
              who took this assignment
            </p>
          </div>
          <div className="p-3 rounded-full bg-gray-200">
            <img
              width="36"
              height="36"
              src="https://img.icons8.com/emoji/36/chart-decreasing-emoji.png"
              alt="chart-decreasing-emoji"
            />
          </div>
        </div>
        <div className="w-[95%] ml-0">
          <Line />
        </div>
      </div>
    </div>
  );
};

export default Graph;
