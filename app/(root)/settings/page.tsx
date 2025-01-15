"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Settigns = () => {
  const route = useRouter();
  useEffect(() => route.push("/settings/privacy"), []);

  return <></>;
};

export default Settigns;
