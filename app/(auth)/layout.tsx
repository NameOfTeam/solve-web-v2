"use client"

import React, { PropsWithChildren, Suspense } from "react";

const AUthLayout = ({ children }: PropsWithChildren) => {
  return <Suspense>{children}</Suspense>;
};

export default AUthLayout;
