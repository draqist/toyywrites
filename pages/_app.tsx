import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/global";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
