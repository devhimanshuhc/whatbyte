import { Separator } from "@/components/ui/separator";
import Modal from "./_components/Modal";
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
import HtmlBox from "./_components/HtmlBox";
import Statistics from "./_components/Statistics";
import Graph from "./_components/Graph";
import ProgressBar from "./_components/Progress";
import Graph2 from "./_components/Graph2";

export default function Home() {
  return (
    <div className="lg:ml-64 md:ml-64 sm:ml-0 xs:ml-0">
      <div className="mx-10 my-8">
        <h1 className="text-md text-gray-800">Skill Test</h1>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
          <div className="w-full lg:w-[60%] h-auto lg:h-screen text-left">
            <HtmlBox />
            <Statistics />
            <Graph />
          </div>
          <div className="w-full lg:w-[40%] h-auto lg:h-screen">
            <ProgressBar />
            <Graph2 />
          </div>
        </div>
      </div>
    </div>
  );
}
