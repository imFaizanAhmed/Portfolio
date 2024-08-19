import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypingEffectProps {
  textArray: string[];
  typingSpeed?: number;
  pauseTime?: number;
  cursorClassName?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  textArray,
  typingSpeed = 100,
  pauseTime = 1500,
  cursorClassName,
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (!isDeleting && charIndex < textArray[currentIndex].length) {
      timeoutId = setTimeout(() => {
        setDisplayedText(
          (prev) => prev + textArray[currentIndex].charAt(charIndex)
        );
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === textArray[currentIndex].length) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % textArray.length);
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, currentIndex, isDeleting, textArray, typingSpeed, pauseTime]);

  return (
    <div className="flex">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {displayedText}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn("block rounded-sm w-1  bg-[#f9004d]", cursorClassName)}
      />
    </div>
  );
};

export default TypingEffect;
