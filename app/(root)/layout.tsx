import Header from "@/components/Header";
import React, { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className="w-full calc-header">{children}</div>
    </>
  );
};

export default RootLayout;
