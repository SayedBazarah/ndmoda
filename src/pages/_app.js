import "@/styles/globals.css";
import Script from "next/script";
import Layout from "@/component/layout/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
