import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { SparklesCore } from "./ui/sparkles";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { TypewriterEffectDemo } from "./typingEffect";

function HeroSection() {
  console.log("rendering HeroSection");
  return (
    <div className="h-[30rem] sm:h-[40rem] w-full rounded-md flex flex-col items-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 md:left-[170px] lg:left-[30%] w-full md:-top-20 hidden sm:block"
        fill="white"
      />
      <div className="p-4 mt-[100px] lg:mt-[150px] relative z-10 w-full text-center">
        <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Faizan Ahmed
        </h1>
        <div className="mt-2 w-[cal(100vw - 80px)] h-40 relative -z-10">
          {/* Gradients */}
          <div className="absolute inset-x-14 md:inset-x-32 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-14 md:inset-x-32 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full max-w-[800px] m-auto"
            particleColor="#FFFFFF"
          />

          <div className="-mt-4 z-10 flex flex-col justify-center items-center">
            <TypewriterEffectDemo />
            <div className="mt-4">
              <Link href="https://drive.google.com/file/d/1wNJ1J0mZ60GplJ7_qzP0oCkbC4fnz9RV/view">
                <MagicButton
                  title="Checkout my work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
