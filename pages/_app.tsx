import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import { QueryClient,QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RecoilNexus />
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
