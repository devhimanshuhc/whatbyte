"use client";
import React, { useContext } from "react";
import { ResponsivePie } from "@nivo/pie";
import { ScoreContext } from "./ScoreContext";

type Props = {};

const Graph2 = (props: Props) => {
  const { score } = useContext(ScoreContext);

  return (
    <div className="mx-2 my-5 border-2 p-5 rounded-lg flex flex-col sm:flex-row gap-7 items-center">
      <div className="flex flex-col items-center gap-10">
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h1 className="font-extrabold mb-4">Quick Analysis</h1>
            <h1 className="mb-4 font-extrabold text-blue-700">{score}/15</h1>
          </div>
          <p className="text-gray-700 text-sm sm:text-base text-center sm:text-left break-words overflow-wrap">
            <span className="font-bold">
              You scored {score} questions correct out of 15.
            </span>{" "}
            However, it still needs some improvements
          </p>
        </div>
        <div className="aspect-square w-full h-full lg:w-full lg:h-full md:w-[80%] md:h-[80%] sm:w-[85%] sm:h-[85%]">
          <ResponsivePie
            data={[
              {
                id: "correct",
                label: "Correct",
                value: score,
                color: "#1b2880",
                background: "#1b2880",
              },
              {
                id: "incorrect",
                label: "Incorrect",
                value: 15 - score,
                color: "#90caf9",
              },
            ]}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
            defs={[
              {
                id: "dots",
                background: "inherit",
                size: 4,
                padding: 1,
              },
              {
                id: "lines",
                value: 5,
                background: "inherit",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: "correct",
                },
                id: "lines",
              },
              {
                match: {
                  id: "incorrect",
                },
                id: "lines",
              },
            ]}
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#999",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Graph2;
