import { useState } from "react";
import Card from "../product/card";
import Filter from "./filter";

export default function Products() {
  let [products, setProducts] = useState([
    {
      title: "Dahlia Abaya",
      price: 1000,
      discount: 10,
      img: "/product.webp",
      imgs: ["/product.webp", "/product1.webp", "/product2.webp"],
      url: "/",
    },
    {
      title: "Dahlia Abaya",
      price: 1000,
      discount: 25,
      img: "/product.webp",
      imgs: ["/product.webp", "/product1.webp", "/product2.webp"],
      url: "/",
    },
    {
      title: "Dahlia Abaya",
      price: 1000,
      discount: 25,
      img: "/product.webp",
      imgs: ["/product.webp", "/product1.webp", "/product2.webp"],
      url: "/",
    },
    {
      title: "Dahlia Abaya",
      price: 1000,
      discount: 25,
      img: "/product.webp",
      imgs: ["/product.webp", "/product1.webp", "/product2.webp"],
      url: "/",
    },
  ]);
  return (
    <>
      <Filter />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 sm:px-5 m-auto w-fit gap-2">
        {products.map((product, index) => (
          <Card
            title={product.title}
            price={product.price}
            discount={product.discount}
            img={product.img}
            imgs={product.imgs}
            url={product.url}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
