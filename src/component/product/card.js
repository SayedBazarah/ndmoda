import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Card({ img, title, price, imgs, url, discount }) {
  //State
  let [mainImage, setMainImage] = useState(img);
  let [cartImage, setCartImage] = useState("/cart.svg");
  let [favImage, setFavImage] = useState("/fav-white.svg");

  //Discount Calc
  let discountedPrice = price - (price * discount) / 100;

  useEffect(() => {}, [mainImage]);

  return (
    <div className="relative  text-start hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] p-3">
      {/* Main Image */}
      <div className="relative ">
        <Link href="/home/p">
          <div className=" rounded-sm text-sm absolute top-2 left-3 text-white bg-discount px-2 py-1">
            <span>{discount}%-</span>
          </div>
          <Image
            src={mainImage}
            width={352.3}
            height={639.14}
            className="object-contain	w-full h-full"
          />
        </Link>
        {/* Favorite Button  */}
        <button
          onClick={() => alert("Hello")}
          className="rounded-full text-sm absolute top-2 right-3 text-white px-2 py-1"
        >
          <Image
            onMouseMove={() => {
              setFavImage("/fav.svg");
            }}
            onMouseLeave={() => {
              setFavImage("/fav-white.svg");
            }}
            src={favImage}
            width={24}
            height={24}
          />
        </button>
        {/* Cart Button */}
        <button
          onClick={() => alert("Hello")}
          className="rounded-full text-sm absolute bottom-2 left-3 text-white px-2 py-1"
        >
          <Image
            onMouseMove={() => {
              setCartImage("/cart-white.svg");
            }}
            onMouseLeave={() => {
              setCartImage("/cart.svg");
            }}
            src={cartImage}
            width={42}
            height={42}
          />
        </button>
      </div>
      {/* Product Details *Price *Title */}
      <div className="my-3">
        <Link href="/home/p" className=" hover:text-red font-semibold ">
          <h3>{title}</h3>
        </Link>
        <div className="flex gap-5 ">
          <span className="text-lightGray line-through"> {price} LE</span>
          <span className="text-red">{discountedPrice} LE</span>
        </div>
      </div>
      {/*  Colors & Opions */}
      <div className="flex gap-3 justify-center items-center">
        {imgs.map((image) => (
          <button
            onClick={() => {
              setMainImage(image);
            }}
          >
            <Image src={image} height={60} width={32} alt={title} />
          </button>
        ))}
      </div>
    </div>
  );
}
