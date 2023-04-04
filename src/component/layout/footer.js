import Link from "next/link";
import React from "react";

export default function Footer() {
  const style = {
    header: "text-main text-xl text-bold my-3",
  };
  return (
    <div className="z-50 text-text grid gap-4 mx-5 md:grid-cols-4 md:gap-10 md:mx-0 pb-5 mt-10 border-t-2 border-t-main">
      <div className="">
        <Link href="/services" className={style.header}>
          الخدمات
        </Link>
        <ul>
          <li>
            <Link href="/">خرسانة مطبوعة</Link>
          </li>
          <li>
            <Link href="/">خرسانة هليكوبتر</Link>
          </li>
        </ul>
      </div>
      <div className="">
        <Link href="/blog" className={style.header}>
          مقالات
        </Link>
        <ul>
          <li>
            <Link href="/blog/stamped-concrete-shapes">
              أشكال ارضيات الخرسانة المطبوعة
            </Link>
          </li>
        </ul>
      </div>
      <div className="">
        <h3 className={style.header}>روابط مهمة</h3>
        <ul>
          <li>
            <Link href="/">سياسة الخصوصية</Link>
          </li>
          <li>
            <Link href="/">الاسئلة المتكررة</Link>
          </li>
          <li>
            <Link href="/sitemap.xml">خريطة الموقع</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className={style.header}>للاستفسار</h3>
        <div className="flex flex-col">
          <span>
            هاتف: <Link href="tel:01000712170">01000712170</Link>
          </span>
          <span>
            بريد الكتروني:
            <Link href="mailto:info@alamid.co">info@alamid.co</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
