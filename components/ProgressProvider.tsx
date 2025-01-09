"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ReactNode } from "react";

const ProgressProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="2px"
        color="#6F69D9"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressProvider;
