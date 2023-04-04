import Link from "next/link";
import React from "react";

export default function ContactForm() {
  return (
    <div className="px-5 pt-20 w-96 lg:w-1/2 m-auto">
      <div>
        <h2 className="text-3xl font-semibold text-main mb-3">
          هل لديك استفسار؟ <br />
          اذا لنتواصل معنا <span className="font-light">👋</span>
        </h2>
        <p className="text-text text-xl">
          املأ النموذج وسيعاود الفريق في غضون 24 ساعة لتواصل معك.
        </p>
      </div>
      <form className="flex flex-col gap-6 mt-7">
        <div className="flex flex-col gap-2">
          <label className="text-main">الاسم</label>
          <input
            type="text"
            placeholder=" م/محمد"
            className=" border-b-2 border-bg outline-0"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-main">رقم الهاتف</label>
          <input
            type="text"
            placeholder=" 01019910600"
            className=" border-b-2 border-bg outline-0"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-main">العنوان</label>
          <input
            type="text"
            placeholder="القاهرة الجديدة"
            className=" border-b-2 border-bg outline-0"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-main">الاستفسار</label>
          <textarea
            placeholder="من فضلك اكتب ما تريد الاستفسار عنه"
            className=" border-b-2 border-bg outline-0 resize-none mb-3"
            rows="2"
          />
        </div>
        <div>
          <Link href="/" className="px-4 py-2 bg-main text-white rounded-sm">
            ارسل الرسالة
          </Link>
        </div>
      </form>
    </div>
  );
}
