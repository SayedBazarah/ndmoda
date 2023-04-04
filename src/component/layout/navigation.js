import Link from "next/link";
import Image from "next/image";
//static img
import home from "../../../public/nav/home.svg";
import idea from "../../../public/nav/idea.svg";
import mixer from "../../../public/nav/mixer.svg";
export default function Navigation() {
  return (
    <nav className="md:hidden grid grid-cols-4 justify-center py-5 px-3 bg-main w-full text-white gap-2 text-center">
      <Link
        href="/"
        className=" border-l-2 border-white flex items-center justify-center"
      >
        الرئيسية
      </Link>
      <Link
        href="/services"
        className=" border-l-2 border-white flex items-center justify-center"
      >
        الخدمات
      </Link>
      <Link
        href="/services/stamped-concrete"
        className=" border-l-2 border-white pl-2 flex items-center justify-center"
      >
        خرسانه مطبوعة
      </Link>
      <Link
        href="/services/helicopter-concrete"
        className="pr-2 flex items-center justify-center"
      >
        خرسانه هليكوبتر
      </Link>
    </nav>
  );
}
``;
