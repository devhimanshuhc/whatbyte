"use client";
import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { ScoreContext } from "@/app/_components/ScoreContext";

type Props = {};

const Modal = (props: Props) => {
  const { setRank, setPercentile, setScore } = useContext(ScoreContext);

  console.log(setRank, setPercentile, setScore);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const rankInput = e.currentTarget.elements.namedItem(
      "rank"
    ) as HTMLInputElement;
    const percentileInput = e.currentTarget.elements.namedItem(
      "percentile"
    ) as HTMLInputElement;
    const scoreInput = e.currentTarget.elements.namedItem(
      "score"
    ) as HTMLInputElement;

    const rank = rankInput ? Number(rankInput.value) : 0;
    const percentile = percentileInput ? Number(percentileInput.value) : 0;
    const score = scoreInput ? Number(scoreInput.value) : 0;

    console.log("Rank:", rank, "Percentile:", percentile, "Score:", score);

    setRank(rank);
    setPercentile(percentile);
    setScore(score);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-900 border-2 border-gray-900">Update</Button>
      </DialogTrigger>
      <DialogContent className="lg:max-w-[550px] sm:max-w-[350px]">
        <DialogHeader>
          <div className="flex flex-row mx-4 justify-between items-center">
            <DialogTitle className="text-bold sm:text-md lg:text-2xl">
              Update Score
            </DialogTitle>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[7px] ml-1 mx-auto font-extrabold">HTML</h1>
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/color/48/html-5--v1.png"
                alt="html-5--v1"
              />
            </div>
          </div>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="flex justify-between items-center gap-10">
              <Label htmlFor="rank" className="text-right flex flex-row">
                <div className="text-white rounded-full bg-blue-900 text-xs h-2 w-2 p-2 mr-2 flex justify-center items-center ">
                  1
                </div>
                <div className="sm:text-md">
                  Update your <span className="font-bold"> Rank</span>
                </div>
              </Label>
              <Input
                id="rank"
                type="number"
                defaultValue="1"
                className="lg:w-40 sm:w-24"
              />
            </div>
            <div className="flex justify-between items-center gap-10">
              <Label htmlFor="percentile" className="text-right flex flex-row">
                <div className="text-white rounded-full bg-blue-900 text-xs h-2 w-2 p-2 mr-2 flex justify-center items-center ">
                  2
                </div>
                <div className="sm:text-sm text-left">
                  Update your <span className="font-bold"> Percentile</span>
                </div>
              </Label>
              <Input
                id="percentile"
                min={10}
                max={100}
                type="number"
                defaultValue="100"
                className="lg:w-40 sm:w-24"
              />
            </div>
            <div className="flex justify-between items-center gap-10 ">
              <Label htmlFor="score" className="text-right flex flex-row">
                <div className="text-white rounded-full bg-blue-900 text-xs h-2 w-2 p-2 mr-2 flex justify-center items-center ">
                  3
                </div>
                <div className="text-left">
                  Update your{" "}
                  <span className="font-bold"> Current Score (out of 15)</span>
                </div>
              </Label>
              <Input
                id="score"
                type="number"
                min={0}
                max={15}
                defaultValue="10"
                className="lg:w-40 sm:w-24  "
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">close</Button>
            <Button type="submit">
              Save
              <ArrowRight className="mx-2 h-3 w-3" />
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
