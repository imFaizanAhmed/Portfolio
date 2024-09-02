"use client";

import { Tabs } from "@/components/ui/animatedTabs";
import SkillsList from "./skillsList";

export function TabsDemo() {
  const tabs = [
    {
      title: "Main Skills",
      value: "mainskills",
      content: (
        <div className="w-[90%] m-auto overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0d1429]">
          <p>Main Skills</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Fontend",
      value: "frontend",
      content: (
        <div className="w-[90%] m-auto overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0d1429]">
          <p>Fontend Skills</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Backend",
      value: "backend",
      content: (
        <div className="w-[90%] m-auto overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0d1429]">
          <p>Backend Skills</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Cloud",
      value: "cloud",
      content: (
        <div className="w-[90%] m-auto overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0d1429]">
          <p>Cloud Computing Skills</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "AI / Web3",
      value: "aibc",
      content: (
        <div className="w-[90%] m-auto overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0d1429]">
          <p>AI / Web3</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto bg-[#0d1429]">
      <SkillsList />
    </div>
  );
};
