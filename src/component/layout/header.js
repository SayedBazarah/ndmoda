import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  let [burger, setBurger] = useState(false);

  return (
    <header className=" max-w-5xl m-auto relative bg-main rounded-md text-white flex justify-between items-center p-4">
      <button
        onClick={() => {
          setBurger(!burger);
        }}
        className="md:hidden flex flex-col gap-1"
      >
        <div className=" w-7 h-[3px] bg-white"></div>
        <div className=" w-5 h-[3px] bg-white self-end"></div>
        <div className=" w-7 h-[3px] bg-white"></div>
      </button>
      <Link href="/" className="font-semibold self-center ">
        LOGO
      </Link>
      <div
        className={
          burger
            ? "block absolute left-0 right-0 top-24  rounded-md bg-main  p-5 "
            : "hidden md:flex"
        }
      >
        <ul className="flex  flex-col md:flex-row md:relative gap-4 md:items-center">
          <li>
            <Link href="/">عروض الصيف</Link>
          </li>
          <li>
            <Link href="/">ملابس المنزل</Link>
          </li>
          <li>
            <Link href="/">اخر قطعة</Link>
          </li>
          <li>
            <Link href="/">عبايات</Link>
          </li>
          <li className="hidden md:block">
            <Link href="/">
              <Image src="/cart.svg" alt="عربة التسوق" width={42} height={42} />
            </Link>
          </li>
        </ul>
      </div>
      <Link href="/" className="block md:hidden">
        <Image src="/cart.svg" alt="عربة التسوق" width={42} height={42} />
      </Link>
    </header>
  );
}
