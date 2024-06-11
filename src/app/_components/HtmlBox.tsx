import React from "react";
import { Separator } from "@/components/ui/separator";
import Modal from "./Modal";

type Props = {};

const HtmlBox = (props: Props) => {
  return (
    <div className="lg:mx-2 sm:mx-0 xs:mx-0 md:px-5 my-5 border-2 lg:p-5 w-full sm:p-2 xs:p-2 xs:py-4 sm:py-4 rounded-lg flex lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:justify-between md:justify-between sm:gap-y-5 xs:gap-y-5 gap-7 items-center">
      <div className="flex flex-col sm:mb-0 ">
        <h1 className="text-xs ml-2 font-extrabold">HTML</h1>
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/html-5--v1.png"
          alt="html-5--v1"
        />
      </div>
      <div className="flex flex-col ">
        <div className="text-lg sm:text-center lg:text-left sm:text-md sm:mt-0 font-extrabold">
          <h1>Hypertext Markup Language</h1>
        </div>
        <div className="text-gray-800 text-md sm:text-md flex flex-row sm:flex-col md:flex-row sm:text-center justify-between w-full gap-1">
          <h1>Question: 08</h1>
          <Separator
            className="bg-gray-700 sm:h-0 md:h-4 h-4 my-auto"
            orientation="vertical"
          />
          <h1>Duration: 15 mins</h1>
          <Separator
            className="bg-gray-700 sm:h-0 md:h-4  h-4 my-auto"
            orientation="vertical"
          />
          <h1>Submitted on 05 June 2021</h1>
        </div>
      </div>
      <div>
        <Modal />
      </div>
    </div>
  );
};

export default HtmlBox;
