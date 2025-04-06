import Image from "next/image";

function AboutContent({ title, desc, image, dir }) {
  return (
    <div
      className={`${dir} flex max-md:flex-col justify-between w-[980px] h-[350px] max-md:w-[300px] max-md:h-fit mx-auto`}
    >
      <div className="flex flex-col justify-center gap-7">
        <h2 className="font-normal text-2xl text-main">{title}</h2>
        <p className="font-extralight text-xl w-[540px] max-md:w-[300px] text-justify">
          {desc}
        </p>
      </div>
      <Image alt="" src={image} width={300} height={300} />
    </div>
  );
}

export default AboutContent;
