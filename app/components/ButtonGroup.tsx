"use client";

import { ReactNode } from "react";


interface ButtonGroupProps {
  children: ReactNode; 
}


const ButtonGroup: React.FC<ButtonGroupProps> = ({ children }) => {
  return (
    <div className="flex gap-5 justify-end">
      {children}
    </div>
  );
};

export default ButtonGroup;
