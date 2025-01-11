import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import ReactQueryProviders from "@/components/provider/ReactQueryProviders";
import React, { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryProviders>
      <Header />
      <div className="w-full h-except-header overflow-y-scroll">
        {children}
        <Footer />
      </div>
    </ReactQueryProviders>
  );
};

export default RootLayout;
