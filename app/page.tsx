"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { Suspense } from "react";
import Skills from "@/components/skills";
import { TabsDemo } from "@/components/skillsTab";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="">
        <Suspense fallback={<div>Loading</div>}>
          <FloatingNav navItems={navItems} />
          {/* <Hero /> */}
          <Hero2 />
          {/* <Skills /> */}
          <TabsDemo />
          {/* <Grid /> */}
          <RecentProjects />
          {/* <Clients /> */}
          {/* <Experience />
          <Approach />
          <Footer /> */}
        </Suspense>
      </div>
    </main>
  );
};

export default Home;
