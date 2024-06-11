"use client";
import React from "react";
import { ResponsiveLine } from "@nivo/line";

type Props = {};

const Line = (props: Props) => {
  return (
    <div {...props} className="aspect-[9/4] ml-0">
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: 0, y: 0 },
              { x: 25, y: 137 },
              { x: 50, y: 61 },
              { x: 75, y: 145 },
              { x: 100, y: 26 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 5 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
          legendOffset: -12,
        }}
        axisLeft={null}
        colors={["purple"]}
        enablePoints={false}
        useMesh={true}
        gridYValues={6}
        curve="basis" // Add this prop for a freehand curve
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "full-size-kana",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
          axis: {
            ticks: {
              line: {
                stroke: "#4b5563",
                strokeWidth: 1,
              },
            },
          },
        }}
        tooltip={({ point }) => (
          <div
            style={{
              backgroundColor: "white",
              padding: "8px 12px",
              borderRadius: "4px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              fontSize: "14px",
            }}
          >
            <strong>Your Percentile:</strong> {point.data.yFormatted}
          </div>
        )}
        role="application"
      />
    </div>
  );
};

export default Line;
