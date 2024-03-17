import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center py-2`}
    >
      <Head>
        <title>Orange</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


    </div>
  );
}
