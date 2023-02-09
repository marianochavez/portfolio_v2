import "@/styles/index.css";
import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import { DataProvider } from "@/context";
import { theme } from "@/theme";



export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </DataProvider>
  );
}
