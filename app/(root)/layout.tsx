import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className="w-full h-exceptHeader overflow-y-scroll">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
