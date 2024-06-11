"use client";
import React, { createContext, useState } from "react";

interface ScoreContextType {
  rank: number;
  percentile: number;
  score: number;
  setRank: (rank: number) => void;
  setPercentile: (percentile: number) => void;
  setScore: (score: number) => void;
}

const initialScoreState: ScoreContextType = {
  rank: 1,
  percentile: 100,
  score: 15,
  setRank: () => {},
  setPercentile: () => {},
  setScore: () => {},
};

export const ScoreContext = createContext<ScoreContextType>(initialScoreState);

export const ScoreProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [rank, setRank] = useState<number>(initialScoreState.rank);
  const [percentile, setPercentile] = useState<number>(
    initialScoreState.percentile
  );
  const [score, setScore] = useState<number>(initialScoreState.score);

  const value: ScoreContextType = {
    rank,
    percentile,
    score,
    setRank,
    setPercentile,
    setScore,
  };

  return (
    <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>
  );
};
