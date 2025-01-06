import Header from "@/components/Header";
import React, { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className="w-full h-exceptHeader">{children}</div>
    </>
  );
};

export default RootLayout;
