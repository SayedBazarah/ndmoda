import FixedCard from "@/component/product/fixedCard";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

//Images & Sources
import main from "../../public/main.jpg";
import Badge from "../component/badge/badge";
import Card from "../component/product/card";
import CatCard from "../component/category/card";
export default function Home() {
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
  let [reviews, setReviews] = useState([
    {
      reviewer: "Fatma S.",
      date: "23/3/2023",
      rating: 5,
      review: "تحفة بجددد ♥️♥️♥️♥️",
      img: "/review.jpg",
      product: {
        title: "Butterfly Istikbal Abaya",
        image: "/product1.webp",
        url: "/product",
      },
    },
    {
      reviewer: "Fatma S.",
      date: "23/3/2023",
      rating: 5,
      review: "تحفة بجددد ♥️♥️♥️♥️",
      img: "/review.jpg",
      product: {
        title: "Butterfly Istikbal Abaya",
        image: "/product1.webp",
        url: "/product",
      },
    },
    {
      reviewer: "Fatma S.",
      date: "23/3/2023",
      rating: 5,
      review: "تحفة بجددد ♥️♥️♥️♥️",
      img: "/review.jpg",
      product: {
        title: "Butterfly Istikbal Abaya",
        image: "/product1.webp",
        url: "/product",
      },
    },
  ]);
  let [badges, setBadges] = useState([
    {
      title: "نقبل استبدال و استرجاع المنتجات ",
      description: "في فترة العروض نقبل الاستبدال خلال 14 يوم من استلام الطلب",
      icon: "/return.svg",
    },
    {
      title: "شحن سريع",
      description:
        "نقوم بشحن المنتجات إلى جميع المحافظات بحد أقصى خلال 3 أيام عمل",
      icon: "/delivery.svg",
    },
    {
      title: "ادفع بأمان",
      description: "جميع بياناتك الشخصية مشفرة على متجرنا وعمليات الدفع مؤمنة",
      icon: "/payment.svg",
    },
    {
      title: "خدمة العملاء 24/7",
      description: "لدينا فريق جاهز للرد على كافة استفساراتك وحل جميع المشاكل",
      icon: "/care.svg",
    },
  ]);

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
        <Image
          src={main}
          className="w-full max-h-[900px]	object-cover	object-center"
        />
        <div className="absolute bg-black opacity-25 top-0 bottom-0 left-0 right-0"></div>
        <div className="absolute top-0 bottom-0 left-0 right-0 md:bottom-32 flex flex-col items-center justify-center text-white">
          <h2 className="text-3xl my-5 md:text-5xl">اطلالتك الجميل مسئولينا</h2>
          <Link href="/" className=" rounded-md bg-main px-5 py-2">
            تسوق الان
          </Link>
        </div>
      </section>
      <main className="text-center max-w-5xl m-auto">
        <section className=" w-fit py-12 px-5 md:px-5   m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {badges.map((badge, index) => (
            <Badge
              title={badge.title}
              description={badge.description}
              icon={badge.icon}
              key={index}
            />
          ))}
        </section>
        <section className="my-10">
          <h2 className="font-bold text-2xl my-8 flex-nowrap	">
            العزومة عليكي والعباية علينا
          </h2>
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
        </section>
        <Carousel products={products} />
        <div className="grid md:grid-cols-2 gap-5 mx-5">
          <CatCard image="/product.webp" title="عبايات" />
          <CatCard image="/product.webp" title="عبايات" />
          <CatCard image="/product.webp" title="عبايات" />
          <CatCard image="/product.webp" title="عبايات" />
        </div>
        <Reviews reviews={reviews} />
      </main>
    </>
  );
}

const Carousel = ({ products }) => {
  let carouselRef = useRef();
  return (
    <section className="my-24 relative">
      <h2 className="font-bold text-2xl my-8 mt-12 flex-nowrap	">
        عبايات استقبال رمضانية
      </h2>
      <button
        onClick={() => {
          carouselRef.current.scrollLeft += 322;
        }}
        className=" absolute top-0 bottom-0 right-0 z-10 flex items-center"
      >
        <Image
          src="/arrow.svg"
          alt="arrow Icon"
          width={64}
          height={64}
          className="rounded-full p-3 rotate-180	"
        />
      </button>
      <div
        id="carousel"
        ref={carouselRef}
        className="scroll-ps-6 snap-x scroll-smooth mx-12 grid grid-flow-col auto-cols-[calc((100% / 2) - 12px)] overflow-x-auto 	snap-mandatory gap-8	"
      >
        {products.map((product, index) => (
          <FixedCard
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
      <button
        onClick={() => {
          carouselRef.current.scrollLeft -= 322;
        }}
        className="absolute top-0 bottom-0 left-0 z-10 flex items-center "
      >
        <Image
          src="/arrow.svg"
          alt="arrow Icon"
          width={64}
          height={64}
          className="rounded-full p-3 "
        />
      </button>
      <div className="my-10">
        <Link
          href="/"
          className="py-3 px-14 bg-main rounded-full text-white hover:opacity-80"
        >
          عرض المزيد
        </Link>
      </div>
    </section>
  );
};

const Reviews = ({ reviews }) => {
  return (
    <section className="my-24 mx-5">
      <div>
        <h3 className="text-2xl font-semibold mb-10">تقيمات عملائنا </h3>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => {
          let stars = [];
          for (let i = 0; i < review.rating; i++) {
            stars.push(<Image src="/star-solid.svg" width={16} height={16} />);
          }
          return (
            <div
              key={index}
              className=" p-3 w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"
            >
              {/* REVIEW */}
              <div className="flex  gap-5 text-right pb-3 border-b-2 border-main">
                <Image
                  src={review.img}
                  alt="customer review"
                  width={175}
                  height={319}
                  className="rounded-sm"
                />
                <div>
                  <span className="font-bold">{review.reviewer}</span>
                  <br />
                  <date className="text-text text-sm">{review.date}</date>
                  <div className="flex  gap-1 mb-4">
                    {stars.map((stars, index) => stars)}
                  </div>
                  <p>تحفة بجددد ♥️♥️♥️♥️</p>
                </div>
              </div>
              {/* PRODUCT IT'S SELF */}
              <Link href={review.product.url} className="flex  gap-5 pt-3">
                <Image
                  src={review.product.image}
                  alt="customer review"
                  width={78}
                  height={150}
                />
                <h5>{review.product.title}</h5>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};
