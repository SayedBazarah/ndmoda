import Image from "next/image";

export default function Badge({ title, description, icon }) {
  return (
    <div className="flex text-start gap-5 items-center">
      <div className=" self-start">
        <Image src={icon} alt={title} width={64} height={64} />
      </div>
      <div>
        <h4 className=" font-bold pb-2">{title}</h4>
        <p className="">{description}</p>
      </div>
    </div>
  );
}
