"use client";

import "../global.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";
import { Tracker } from "../components/Tracker";

export default function Page() {
  const router = useRouter(); 

  const handleContinue = () => {
    router.push("/next"); 
  };

  const [selectedPurpose, setSelectedPurpose] = useState<string>("");
  const [selectedEducation, setSelectedEducation] = useState<string>("");
  const [selectedSocial, setSelectedSocial] = useState<string>("");
  const [selectedMode, setSelectedMode] = useState<string>("");
  const [selectedExperience, setSelectedExperience] = useState<string>("");

  const allFieldsCompleted =
    selectedPurpose &&
    selectedEducation &&
    selectedSocial &&
    selectedMode &&
    selectedExperience;

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F7F7F7]">
      <div className="bg-white rounded-lg p-8 sm:w-[90%] md:w-[70%] lg:w-[50%]">
        {/* Tracker */}
        <Tracker currtrack={50} height={4} bgcolor="bg-gray-300">
          <Tracker.Bar color="bg-[#227FA1]" />
        </Tracker>

        <div className="flex flex-col items-start">
          <h1 className="mb-4 text-4xl font-semibold text-black">
            Welcome Onboard!
          </h1>
          <p className="text-md mb-4">Let’s get to know you!</p>

          {/* First Group */}
          <p className="text-sm text-blue-400 mb-4">
            What brings you to Techpadie?
          </p>
          <ButtonGroup>
            <Button
              isActive={selectedPurpose === "Learn"}
              onClick={() => setSelectedPurpose("Learn")}
            >
              Learn
            </Button>
            <Button
              isActive={selectedPurpose === "Earn"}
              onClick={() => setSelectedPurpose("Earn")}
            >
              Earn
            </Button>
            <Button
              isActive={selectedPurpose === "Community"}
              onClick={() => setSelectedPurpose("Community")}
            >
              Community
            </Button>
          </ButtonGroup>

          {/* Second Group */}
          <p className="text-sm text-blue-400 mb-4">
            Highest level of education?
          </p>
          <ButtonGroup>
            <Button
              isActive={selectedEducation === "High School"}
              onClick={() => setSelectedEducation("High School")}
            >
              High School
            </Button>
            <Button
              isActive={selectedEducation === "Bachelor's"}
              onClick={() => setSelectedEducation("Bachelor's")}
            >
              Bachelors
            </Button>
            <Button
              isActive={selectedEducation === "Master's"}
              onClick={() => setSelectedEducation("Master's")}
            >
              Masters
            </Button>
          </ButtonGroup>

          {/* Third Group */}
          <p className="text-sm text-blue-400 mb-4">Preferred social media?</p>
          <ButtonGroup>
            <Button
              isActive={selectedSocial === "Telegram"}
              onClick={() => setSelectedSocial("Telegram")}
            >
              Telegram
            </Button>
            <Button
              isActive={selectedSocial === "Discord"}
              onClick={() => setSelectedSocial("Discord")}
            >
              Discord
            </Button>
            <Button
              isActive={selectedSocial === "Twitter X"}
              onClick={() => setSelectedSocial("Twitter X")}
            >
              Twitter X
            </Button>
          </ButtonGroup>

          {/* Fourth Group */}
          <p className="text-sm text-blue-400 mb-4">
            Which application mode do you prefer?
          </p>
          <ButtonGroup>
            <Button
              isActive={selectedMode === "Dark Mode"}
              onClick={() => setSelectedMode("Dark Mode")}
            >
              Dark Mode
            </Button>
            <Button
              isActive={selectedMode === "Light Mode"}
              onClick={() => setSelectedMode("Light Mode")}
            >
              Light Mode
            </Button>
          </ButtonGroup>

          {/* Fifth Group */}
          <p className="text-sm text-blue-400 mb-4">
            What’s your level of web3.0 experience?
          </p>
          <ButtonGroup>
            <Button
              isActive={selectedExperience === "0-1 year"}
              onClick={() => setSelectedExperience("0-1 year")}
            >
              0-1 year
            </Button>
            <Button
              isActive={selectedExperience === "2-4 years"}
              onClick={() => setSelectedExperience("2-4 years")}
            >
              2-4 years
            </Button>
            <Button
              isActive={selectedExperience === "5 years above"}
              onClick={() => setSelectedExperience("5 years above")}
            >
              5 years above
            </Button>
          </ButtonGroup>
        </div>

        {/* Continue Button */}
        <button
          className={`w-full rounded-md px-8 py-2 ${
            allFieldsCompleted
              ? "bg-[#227FA1] text-white"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
          disabled={!allFieldsCompleted}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
