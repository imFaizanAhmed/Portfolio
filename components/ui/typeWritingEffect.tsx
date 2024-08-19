"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [key, setKey] = useState(0);
  const [firstRender, setFirstRender] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    } else if (isInView) {
      setKey((prevKey) => prevKey + 1);
    }
  }, [isInView]);

  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => (
    <div className="inline-flex">
      {wordsArray.map((word, wordIdx) => (
        <div key={`word-${wordIdx}`} className="inline-block">
          {word.text.map((char, charIdx) => (
            <motion.span
              key={`char-${charIdx}`}
              className={cn(`dark:text-white text-black `, word.className)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.05,
                delay: charIdx * 0.05 + wordIdx * 0.5,
              }}
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </div>
      ))}
    </div>
  );

  return (
    <div ref={ref} className={cn("flex items-center mt-6", className)}>
      <motion.div
        key={key}
        className="overflow-hidden inline-flex pb-2"
        initial={{ width: "0%" }}
        animate={{ width: "fit-content" }}
        style={{ whiteSpace: "nowrap" }}
      >
        <div className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold">
          {renderWords()}
        </div>
      </motion.div>
      {/* <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}
      /> */}
    </div>
  );
};
