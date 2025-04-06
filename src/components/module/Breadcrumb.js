"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Mapping of path segments to display names
  const pathMap = {
    about: "درباره ما",
    call: "تماس با ما",
  };

  // Function to generate breadcrumb items
  const getBreadcrumbs = () => {
    const paths = pathname.split("/").filter((path) => path !== "");
    const breadcrumbs = paths.map((path, index) => {
      const href = `/${paths.slice(0, index + 1).join("/")}`;
      const label = pathMap[path] || formatDefaultLabel(path);
      const isLast = index === paths.length - 1;

      return { href, label, isLast };
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <nav aria-label="Breadcrumb" className="my-10">
      <ol className="flex flex-wrap items-center gap-2 text-lg">
        <li>
          <Link href="/" className="text-gray-500 hover:underline">
            تکنو شاپ
          </Link>
        </li>
        {breadcrumbs.map((crumb) => (
          <li key={crumb.href} className="flex items-center gap-2">
            <span className="text-main">/</span>
            {crumb.isLast ? (
              <span className="font-extralight text-gray-500">
                {crumb.label}
              </span>
            ) : (
              <Link href={crumb.href} className="text-gray-500 hover:underline">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
