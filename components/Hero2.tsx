"use client";
import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/MovingBorders";
import { SparklesCore } from "./ui/sparkles";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

function HeroSection() {
  return (
    <div className="h-[30rem] md:h-[40rem] w-full rounded-md flex flex-col items-center relative overflow-hidden mx-auto py-10 md:py-0">
      {/* <Spotlight className="-top-40 left-0 w-full md:-top-20" fill="white" /> */}
      <div className="p-4 mt-[100px] lg:mt-[200px] relative z-10 w-full text-center">
        <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Faizan Ahmed
        </h1>
        <div className="mt-2 w-[cal(100vw - 80px)] h-40 relative -z-10">
          {/* Gradients */}
          {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full max-w-[500px] m-auto"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full max-w-[600px] m-auto h-full bg-[#000319] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          <div className="-mt-4 z-10">
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
              <span className="text-purple">3+ Years of Experienced</span>{" "}
              Semi-Senior Software Engineer
            </p>
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
