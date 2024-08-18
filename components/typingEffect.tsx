"use client";

import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "./ui/typeWritingEffect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "3+",
      className: "text-purple dark:text-purple",
    },
    {
      text: "Years",
      className: "text-purple dark:text-purple",
    },
    {
      text: "of",
      className: "text-purple dark:text-purple",
    },
    {
      text: "Experienced",
      className: "text-purple dark:text-purple",
    },
    {
      text: "Senior",
    },
    {
      text: "Software",
    },
    {
      text: "Engineer",
    },
  ];
  return (
    <div className="mt-5">
      {/* <TypewriterEffect words={words} /> */}
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
