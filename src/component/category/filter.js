import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Filter() {
  let [dropDown, setDropDown] = useState(false);
  return (
    <div className="flex justify-between my-10 sm:px-10 ">
      <div className="flex gap-5">
        <div className=" p-1 border-main border-2 w-fit flex flex-col gap-1">
          <div className="bg-main h-2 w-8  border-main border-2"></div>
          <div className="bg-main h-2 w-8  border-main border-2"></div>
          <div className="bg-main h-2 w-8  border-main border-2"></div>
        </div>
        <div className=" p-1 border-main border-2 w-fit flex gap-1">
          <div className="bg-main h-full w-3  border-main border-2"></div>
          <div className="bg-main h-full w-3  border-main border-2"></div>
        </div>
        <div className=" p-1 border-main border-2 w-fit flex gap-1">
          <div className="bg-main h-full w-2  border-main border-2"></div>
          <div className="bg-main h-full w-2  border-main border-2"></div>
          <div className="bg-main h-full w-2  border-main border-2"></div>
        </div>
      </div>
      <div className="relative">
        <button
          onClick={() => {
            setDropDown(!dropDown);
          }}
          className=" text-text hover:text-main flex gap-10 justify-between items-center px-5 w-48 py-2 border border-main rounded-full"
        >
          <p>الاكثر رواجا</p>
          <Image
            src="/arrow.svg"
            width={12}
            height={12}
            className=" -rotate-90"
          />
        </button>
        <div
          className={
            dropDown
              ? "absolute flex flex-col py-3 border border-main rounded-sm z-10 bg-white w-48 mt-2 "
              : "hidden"
          }
        >
          <Link
            href="/"
            className="h-10 hover:bg-main hover:text-white pr-5 flex items-center"
          >
            الاكثر رواجا
          </Link>
          <Link
            href="/"
            className="h-10 hover:bg-main hover:text-white pr-5 flex items-center"
          >
            الاكثر مبيعاً
          </Link>
          <Link
            href="/"
            className="h-10 hover:bg-main hover:text-white pr-5 flex items-center"
          >
            ابجدي
          </Link>
          <Link
            href="/"
            className="h-10 hover:bg-main hover:text-white pr-5 flex items-center"
          >
            {" "}
            السعر الاعلي
          </Link>
          <Link
            href="/"
            className="h-10 hover:bg-main hover:text-white pr-5 flex items-center"
          >
            السعر الارخص
          </Link>
        </div>
      </div>
    </div>
  );
}
