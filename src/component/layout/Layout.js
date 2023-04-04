import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
//Component
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>NDMODA</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@500&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="relative font-messiri">
        <div className=" -z-40">{children}</div>
        <div className="fixed top-3 left-5 right-5  z-50">
          <Header />
        </div>
      </main>
    </>
  );
  return (
    <div className="relative max-w-[1100px] m-auto">
      <div className="fixed top-0 left-0 right-0 flex flex-col  bg-white max-w-5xl m-auto z-50 ">
        <Header />
      </div>
      <div className="max-w-5xl m-auto mt-10">{children}</div>
      {/* <ContactForm /> */}
      <div className="fixed bottom-24 md:bottom-4 left-3 ">
        <CallBTNs />
      </div>
      <div className="fixed bottom-0 left-0 right-0 flex flex-col w-full">
        <div className="flex justify-center ">
          <Navigation />
        </div>
      </div>
      <Footer />
    </div>
  );
}
