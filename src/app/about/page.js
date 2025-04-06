import AboutContent from "@/module/AboutContent";
import { abouts } from "@/data/about";
import Breadcrumbs from "@/module/Breadcrumb";

function page() {
  return (
    <>
      <Breadcrumbs />
      <div>
        <h1 className="font-medium text-5xl text-main pb-7">درباره ما</h1>
        <p className="font-extralight text-xl max-md:w-[300px] max-md:text-justify mx-auto mb-10">
          تکنوشاپ فعالیت خود را از سال 1383 در زمینۀ فروش قطعات کامپیوتر و
          کالاهای دیجیتال به صورت آنلاین از طریق وبسایت و آفلاین از طریق فروشگاه
          فیزیکی شروع نموده و نمایندگی رسمی پخش محصولات بسیاری از شرکت‌های
          ایرانی و خارجی را داشته و تا کنون به تمـام شـهـرهـای کـوچـک و بـزرگ
          ایـران ارسـال کـالا داشته و در این زمینه یکی از پیشتازهای این عرصه
          می‌باشد.
        </p>

        <div className="flex flex-col gap-4">
          {abouts.map((about, index) => (
            <AboutContent
              key={index}
              title={about.title}
              desc={about.desc}
              image={about.image}
              dir={index % 2 !== 0 ? "flex-row-reverse" : "flex-row"}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default page;
