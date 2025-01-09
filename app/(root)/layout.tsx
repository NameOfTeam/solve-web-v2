import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ReactQueryProviders from "@/components/ReactQueryProviders";
import React, { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ReactQueryProviders>
        <Header />
      </ReactQueryProviders>
      <div className="w-full h-except-header overflow-y-scroll">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
