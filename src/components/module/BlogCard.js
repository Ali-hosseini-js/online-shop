import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogCard({ title, image, href }) {
  return (
    <Link
      href={href}
      className="w-[290px]  border border-gray-500 rounded-lg my-5"
    >
      <Image
        className="rounded-t-lg w-full h-auto"
        alt={title}
        src={image}
        width={290}
        height={170}
        priority
      />
      <p className="text-[16px] font-normal flex items-center justify-center p-3 h-[100px]">
        {title}
      </p>
    </Link>
  );
}

export default BlogCard;
