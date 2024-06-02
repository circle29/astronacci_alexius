"use client";

import Hero from "@/components/Hero";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col item-center justify-center ">
      <div className="flex flex-row mt-5">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
