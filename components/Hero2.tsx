import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { SparklesCore } from "./ui/sparkles";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { TypewriterEffectDemo } from "./typingEffect";
import TypingEffect from "./effects/typingeffect";

function HeroSection() {
  const textArray = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];

  return (
    <div className="w-full rounded-md flex flex-col items-center relative overflow-hidden mx-auto pt-10 pb-20 md:pt-0">
      <Spotlight
        className="-top-40 md:left-[0px] hidden sm:block w-full md:-top-20"
        fill="white"
      />
      <div className="absolute inset-x-14 md:inset-x-32 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-14 md:inset-x-32 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />

      <section
        id="intro"
        className="mt-[150px] min-h-[calc(100svh - 119px)] sm:min-h-[calc(100svh - 64px)] lg:min-h-[calc(100svh - 73px)] max-w-[1004px] w-full px-8"
      >
        <div className="w-full flex flex-col md:flex-row-reverse justify-center items-center z-10 gap-8">
          <div className="block min-w-[230px] w-[230px] items-center mb-2 rounded-tl-[4%] rounded-tr-[30%] rounded-br-[4%] rounded-bl-[30%] overflow-hidden bg-white-200 relative aspect-[230/265]">
            <img
              style={{ position: "absolute", height: 400, top: 8 }}
              src="./myPicture.png"
            />
          </div>
          <div className="min-w-[unset] md:min-w-[450px] lg:w-[700px]">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-base m-0">
                Welcome to my world, I&apos;m{" "}
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold block leading-tight">
                  Faizan Ahmed
                </span>
              </p>
              <br />
              <h2 className="flex items-center flex-nowrap overflow-visible leading-9 text-3xl sm:text-3xl md:text-4xl lg:text-4xl h-9">
                <pre className="md:inline hidden">I&apos;m a </pre>
                <span className="text-[#f9004d]">
                  <div
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    <TypingEffect
                      textArray={textArray}
                      typingSpeed={100}
                      pauseTime={1500}
                    />
                  </div>
                </span>
                <span className="inline-block ml-[0.1rem] w-1 h-1 animate-[blink 1s infinite]"></span>
              </h2>
            </div>
            <br />
            <p className="text-xl">
              with more than <span className="text-[#f9004d]">three years</span>{" "}
              of industrial experience. I can be relied upon to help your
              company achieve its goals by providing sustainable and scalable
              solutions.
            </p>
            <br />
            <p>
              Currently, I&apos;m working as Full-stack developer at{" "}
              <a href="https://numuworld.com/" target="_blank">
                Numu World
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
