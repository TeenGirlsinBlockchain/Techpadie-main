"use client"; 
import "../global.css";

import { useState, useRef, useEffect } from "react";

export default function Page() {
  
  const [pin, setPin] = useState<string[]>(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState<number>(60); 
  const [verificationStatus, setVerificationStatus] = useState<"pending" | "success" | "error">("pending");

  
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLInputElement>(null);
  const inputRef4 = useRef<HTMLInputElement>(null);

  
  const inputRefs = [inputRef1, inputRef2, inputRef3, inputRef4];

  
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer); 
    }
  }, [timeLeft]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    const newPin = [...pin];
    newPin[index] = value.slice(0, 1); 
    setPin(newPin);

    
    if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
    
    if (value.length === 0 && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleContinue = () => {
    const completePin = pin.join("");
    if (completePin.length === 4) {
      setVerificationStatus("success");
      alert("PIN verified: " + completePin);
    } else {
      setVerificationStatus("error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen md:bg-gray-100 p-4">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg">
        <h2 className="text-2xl font-[700] text-gray-700 mb-1 text-start text-[24px]">
          Email Verification
        </h2>
        <div className="text-start text-[12px] font-[400] mb-14">
          We’ve sent you a code to confirm your registration
        </div>

        <div className="flex justify-between mb-4 items-center">
          {pin.map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={pin[index]}
              onChange={(e) => handleChange(e, index)}
              ref={inputRefs[index]}
              className={`text-center text-3xl font-bold border-2 ${
                verificationStatus === "error" && pin.join("").length < 4 ? "border-red-500" : "border-gray-300"
              } rounded-md w-12 h-12`}
              placeholder="-"
            />
          ))}
        </div>

        {/* Timer */}
        {timeLeft > 0 ? (
          <div className="text-sm text-gray-600 mb-4">Time left: {timeLeft} seconds</div>
        ) : (
          <div className="text-sm text-red-600 mb-4">Times up! Please try again.</div>
        )}

        {/* Verification Messages */}
        {verificationStatus === "error" && (
          <p className="text-red-500 text-sm mb-2">Invalid PIN. Please try again.</p>
        )}
        {verificationStatus === "success" && (
          <p className="text-green-500 text-sm mb-2">PIN verified successfully!</p>
        )}

        <button
          onClick={handleContinue}
          disabled={timeLeft === 0} 
          className={`w-full py-2 px-4 ${
            timeLeft === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#227FA1] hover:bg-[#227FA1]-200"
          } text-white font-semibold rounded-lg shadow-md`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
