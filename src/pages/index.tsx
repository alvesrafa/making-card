import { CardProvider } from "@/contexts/Card";
import Head from "next/head";
import Main from "./main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Making your card</title>
        <meta name="description" content="Make your css custom card" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CardProvider>
        <Main />
      </CardProvider>
    </>
  );
}
