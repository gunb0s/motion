import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="=w-full h-screen bg-[url('/cool-background.png')]">
      <div className="w-full h-full max-w-xl mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
