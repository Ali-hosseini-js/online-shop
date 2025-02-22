import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

function List() {
  return (
    <div className="flex justify-between max-md:justify-center py-10 px-[70px] border-b-[1px] border-black">
      <div>
        <ul className="flex gap-12 text-nowrap">
          <li className="gap-1 items-center list-item">
            دسته بندی کالاها
            <IoIosArrowDown />
          </li>
          <li className="list-item">
            <Link href="/offer">تخفیف ها</Link>
          </li>
          <li className="list-item">
            <Link href="/"> خرید اقساطی</Link>
          </li>
          <li className="list-item">
            <Link href="/call"> راهنمای خرید</Link>
          </li>
          <li className="list-item">
            <Link href="/call"> تماس با ما</Link>
          </li>
          <li className="list-item">
            <Link href="/about"> درباره ما</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default List;
