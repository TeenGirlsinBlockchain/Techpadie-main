"use client";
import "../global.css";

import ButtonIcon from "../components/ButtonIcon";
import { Tracker } from "../components/Tracker";
import Image from "next/image";
import ellipsebg from "@/public/images/ellipsebg.png";
import img1 from "@/public/images/1.png";
import img2 from "@/public/images/2.png";
import img3 from "@/public/images/3.png";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div
        className="sm:w-[90%] md:w-[70%] lg:w-[50%] rounded-t-3xl p-24 px-28 py-20"
        style={{
          backgroundImage: `url(${ellipsebg.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Progress Tracker */}
        <Tracker currtrack={100} height={4} bgcolor="bg-gray-300">
          <Tracker.Bar color="bg-[#227FA1]" />
        </Tracker>

        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-4xl font-semibold text-blue-400">More Knowledge</h1>
          <p className="text-xl font-semibold text-black">All in one place</p>
          <p className="text-sm text-black">
            Enjoy super-fast transaction with our wallet based on the Solana blockchain ecosystem.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 mt-8 mb-8">
          <Image src={img1} alt="Image 1" />
          <Image src={img2} alt="Image 2" />
          <Image src={img3} alt="Image 3" />
        </div>

        {/* Continue Button */}
        <ButtonIcon>Continue</ButtonIcon>
      </div>
    </div>
  );
}
