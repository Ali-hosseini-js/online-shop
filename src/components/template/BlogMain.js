import { blogs } from "@/data/blog";
import BlogCard from "@/module/BlogCard";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

function BlogMain() {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center gap-5 px-5 max-md:flex-col border-b-2 border-main">
          <p className="text-main text-[32px] font-semibold text-nowrap">
            مقالات
          </p>
          <Link
            href="/blog"
            className="flex items-center justify-center text-main gap-3 text-nowrap"
          >
            مشاهده همه
            <IoIosArrowBack />
          </Link>
        </div>
        <div className="flex flex-wrap  items-center justify-between my-10 max-md:justify-center">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              title={blog.title}
              href={blog.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogMain;
