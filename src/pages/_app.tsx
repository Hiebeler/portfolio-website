import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Source_Code_Pro } from "next/font/google";

const source_code_pro = Source_Code_Pro({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={source_code_pro.className}>
      <Component {...pageProps} />
    </main>
  );
}
