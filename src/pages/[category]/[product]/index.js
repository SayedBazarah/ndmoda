import Image from "next/image";

export default function Product() {
  return (
    <section className="mt-28 flex flex-col items-center justify-between md:items-start md:flex-row gap-5 max-w-5xl m-auto px-5">
      <div className=" relative max-w-[470px] ">
        <Image src="/product1.webp" alt="product" width={470} height={780} />
        <div className=" absolute top-0">
          <Image
            src="/product1.webp"
            alt="product"
            width={60}
            height={60}
            className="w-full border border-main"
          />
          <Image
            src="/product2.webp"
            alt="product"
            width={60}
            height={60}
            className="w-full border border-main"
          />
          <Image
            src="/product.webp"
            alt="product"
            width={60}
            height={60}
            className="w-full border border-main"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 text-xl md:w-1/2">
        <div>
          <h1 className="text-3xl">عباية خروج من الحرير</h1>
          <p className="text-main">الخامة: حرير</p>
        </div>
        <div>
          <p>الالوان</p>
          <div className="flex gap-2 ">
            <button className="w-10 h-10 bg-main border shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"></button>
            <button className="w-10 h-10  bg-bg border shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"></button>
            <button className="w-10 h-10 bg-text border shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"></button>
            <button className="w-10 h-10 bg-black border shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"></button>
            <button className="w-10 h-10 bg-white border shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"></button>
            <button className="w-10 h-10 bg-discount border shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"></button>
          </div>
        </div>
        <div>
          <span>المقاسات</span>
          <div className="flex gap-2">
            <button className=" hover:bg-main hover:text-white border-main text-main w-14 h-8 border shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
              sm
            </button>
            <button className=" hover:bg-main hover:text-white border-main text-main w-14 h-8 border shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
              md
            </button>
            <button className=" hover:bg-main hover:text-white border-main text-main w-14 h-8 border shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
              lg
            </button>
            <button className=" hover:bg-main hover:text-white border-main text-main w-14 h-8 border shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
              xl
            </button>
          </div>
        </div>
        <div>
          <span>السعر</span>
          <div className="flex gap-5 text-2xl">
            <span className="text-lightGray line-through"> 1000 LE</span>
            <span className="text-red">750 LE</span>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="border-2 border-main rounded-md flex ">
            <button className="py-1 px-3">+</button>
            <input
              type="number"
              value={1}
              className="w-10 text-center focus:outline-none"
            />

            <button className="py-1 px-3">-</button>
          </div>
          <div className="p-3 rounded-md border-2 border-red hover:opacity-60">
            <Image src="/fav.svg" height={18} width={18} />
          </div>
        </div>
        <div className="flex flex-col items-start gap-3">
          <button className="bg-main text-white rounded-sm w-full py-3 hover:opacity-60">
            اضافة الي العربة
          </button>
          <button className="bg-red text-white rounded-sm w-full py-3 hover:opacity-60">
            شراء الان
          </button>
        </div>
      </div>
    </section>
  );
}
