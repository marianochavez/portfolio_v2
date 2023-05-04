import "@/styles/index.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import { ChakraProvider } from "@chakra-ui/react";
import { DataProvider } from "@/context/DataProvider";
import { theme } from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <Analytics />
      </ChakraProvider>
    </DataProvider>
  );
}
