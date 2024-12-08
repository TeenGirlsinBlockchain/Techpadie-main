"use client";

import { ReactNode } from "react";


interface ButtonIconProps {
  children: ReactNode; 
  onClick?: () => void; 
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full rounded bg-[#227FA1] text-white py-2 px-4 mt-8 border-none cursor-pointer"
    >
      {children}
    </button>
  );
};

export default ButtonIcon;
