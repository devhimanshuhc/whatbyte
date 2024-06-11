"use client";
import { Progress } from "@/components/ui/progress";
import React, { useState } from "react";

type Props = {};

const ProgressBar = (props: Props) => {
  const [progress, setProgress] = useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-2 my-5 border-2 p-5 rounded-lg flex flex-col gap-7 text-left justify-start ">
      <h1 className="font-extrabold">Syllabus Wise Analysis</h1>
      <div className="flex flex-col gap-5">
        <div className="text-md text-gra-700 ">
          <h1>HTML Tools, Forms, History</h1>
          <div className="flex items-center my-5">
            <div className="w-full bg-blue-200 dark:bg-gray-800 rounded-full h-3">
              <div
                className="bg-blue-500 rounded-full h-3 transition-all duration-300 
                  w-[80%]"
              />
            </div>
            <span className="ml-2 text-sm font-medium">
              {" "}
              <span className="ml-2 text-sm font-medium">80%</span>
            </span>
          </div>
        </div>
        <div className="text-md text-gra-700 ">
          <h1>Tags & References in HTML</h1>
          <div className="flex items-center my-5">
            <div className="w-full bg-orange-200 dark:bg-gray-800 rounded-full h-3">
              <div
                className="bg-orange-500 rounded-full h-3 transition-all duration-300 
                  w-[60%]"
              />
            </div>
            <span className="ml-2 text-sm font-medium">
              {" "}
              <span className="ml-2 text-sm font-medium">60%</span>
            </span>
          </div>
        </div>
        <div className="text-md text-gra-700 ">
          <h1>Tables & References in HTML</h1>
          <div className="flex items-center my-5">
            <div className="w-full bg-red-200 dark:bg-gray-800 rounded-full h-3">
              <div
                className="bg-red-500 rounded-full h-3 transition-all duration-300 
                  w-[24%]"
              />
            </div>
            <span className="ml-2 text-sm font-medium">
              {" "}
              <span className="ml-2 text-sm font-medium">24%</span>
            </span>
          </div>
        </div>
        <div className="text-md text-gra-700 ">
          <h1>Tags & CSS BasicsL</h1>
          <div className="flex items-center my-5">
            <div className="w-full bg-green-200 dark:bg-gray-800 rounded-full h-3">
              <div
                className="bg-green-500 rounded-full h-3 transition-all duration-300 
                  w-[96%]"
              />
            </div>
            <span className="ml-2 text-sm font-medium">
              {" "}
              <span className="ml-2 text-sm font-medium">96%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
