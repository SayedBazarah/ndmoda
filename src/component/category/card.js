import Image from "next/image";
import Link from "next/link";

export default function Card({ title, image }) {
  return (
    <div
      className="relative bg-cover bg-no-repeat h-[424px] w-full grid justify-center items-end"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Link
        href="/home"
        className="mb-6 px-10 py-2 text-white bg-main rounded-md z-10"
      >
        {title}
      </Link>
    </div>
  );
}
