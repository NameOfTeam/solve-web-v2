"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function ReactQueryProviders({
  children,
}: React.PropsWithChildren) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          retry: 1,
          staleTime: 60000,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
}
