"use client";

import { createContext, useContext, ReactNode } from "react";


interface TrackerContextProps {
  currtrack: number; 
  height?: number; 
  bgcolor?: string;
}

interface TrackerProps {
  currtrack: number; 
  height?: number;
  children: ReactNode; 
  bgcolor?: string; 
}

interface BarProps {
  color?: string; 
}

interface ProgressProps {
  color?: string;
}


const TrackerContext = createContext<TrackerContextProps | undefined>(undefined);

function useTracker(): TrackerContextProps {
  const context = useContext(TrackerContext);
  if (context === undefined) {
    throw new Error("useTracker must be used within a TrackerProvider");
  }
  return context;
}


function Tracker({ currtrack, height = 4, children, bgcolor = "bg-gray-200" }: TrackerProps) {
  return (
    <TrackerContext.Provider value={{ currtrack, height, bgcolor }}>
      <div className="w-full">{children}</div>
    </TrackerContext.Provider>
  );
}


function Bar({ color = "bg-blue-500" }: BarProps) {
  const { currtrack, height, bgcolor } = useTracker();
  return (
    <div className={`w-full ${bgcolor}`} style={{ height: `${height}px` }}>
      <div
        className={`${color} h-full`}
        style={{ width: `${currtrack}%`, transition: "width 0.3s ease" }}
      ></div>
    </div>
  );
}


function Progress({ color = "text-gray-900" }: ProgressProps) {
  const { currtrack } = useTracker();
  return <span className={`${color} font-semibold`}>{currtrack}%</span>;
}


Tracker.Bar = Bar;
Tracker.Progress = Progress;

export { Tracker };
