import type { AppProps } from "next/app";
import Header from "../components/Layout/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex w-full h-full">
      <Header />
      <div className="w-full p-6">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
