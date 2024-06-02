import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex justify-center items-center w-[1440p] m-20">
      {children}
    </main>
  );
};

export default layout;
