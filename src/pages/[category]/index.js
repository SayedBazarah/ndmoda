import Filter from "@/component/category/filter";
import Products from "@/component/category/products";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

//Images & Sources
import main from "../../../public/store-front.jpg";

export default function Category() {
  return (
    <>
      <Head>
        <title>ان دي مودة</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="relative">
        <Image src={main} className="w-full max-h-[400px] object-cover" />
        <div className="absolute bg-black opacity-25 top-0 bottom-0 left-0 right-0"></div>
        <div className="absolute top-0 bottom-0 left-0 right-0 md:bottom-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-3xl my-5 md:text-5xl">اطلالتك الجميل مسئولينا</h2>
        </div>
      </section>
      <main className="text-center max-w-5xl m-auto">
        <Products />
      </main>
    </>
  );
}
