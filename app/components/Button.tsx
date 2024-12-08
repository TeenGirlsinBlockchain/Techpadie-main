"use client";

import { ReactNode } from "react";

// Define the props for the Button component
interface ButtonProps {
  type?: "button" | "submit" | "reset"; // Button types
  onClick: () => void; // Click handler function
  addedStyles?: string; // Additional Tailwind or custom styles
  children: ReactNode; // Button content
  isActive?: boolean; // Determines active styles
}

// Button component
const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  addedStyles = "",
  children,
  isActive = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-full border px-8 py-2 ${
        isActive ? "bg-[#227FA1] text-white" : "bg-[#F1F1F1]"
      } ${addedStyles}`}
    >
      {children}
    </button>
  );
};

export default Button;
