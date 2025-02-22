import Image from "next/image";
import Link from "next/link";

function CategoryCard({ href, image, alt, description }) {
  return (
    <Link
      href={href}
      className="flex flex-col gap-4 justify-center items-center h-[200px] w-[185px]"
    >
      <Image
        className="w-[120px] h-[120px]"
        alt={alt}
        src={image}
        width={400}
        height={400}
      />
      <p className="text-[20px] font-medium">{description}</p>
    </Link>
  );
}

export default CategoryCard;
