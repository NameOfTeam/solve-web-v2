import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import React, { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className="w-full h-except-header overflow-y-scroll">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
