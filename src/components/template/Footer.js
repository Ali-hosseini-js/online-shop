import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";

function Footer() {
  return (
    <footer className="-mx-[100px] px-[100px]  my-7">
      <div className="bg-footer flex items-center justify-between max-md:flex-col max-md:gap-5 py-16 -mx-[100px] px-[100px]">
        <div className="flex flex-col gap-4 ">
          <p className="text-white max-md:text-center">
            برای دریافت آخرین اخبار و تخفیف های جدید,ایمیل خود را وارد نمایید
          </p>
          <div className="flex justify-center items-center max-w-[400px] max-md:flex-col gap-3">
            <input
              type="text"
              placeholder="ایمیل شما"
              className="border border-white rounded-lg bg-inherit p-2 w-full text-white"
            />
            <button className="button">ثبت</button>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5">
          <p className="text-white text-[14px] font-semibold text-center w-full">
            شبکه های اجتماعی
          </p>
          <div className="flex gap-2">
            <Image
              alt="telegram"
              src="/social/social-telegram.svg"
              width={48}
              height={48}
            />
            <Image
              alt="instagram"
              src="/social/social-insta.svg"
              width={48}
              height={48}
            />
            <Image alt="x" src="/social/social-x.svg" width={48} height={48} />
          </div>
        </div>
      </div>

      <div className="flex h-[440px] ">
        <div className="flex items-center justify-center h-full w-3/4">
          <table className="w-full border-collapse max-md:block max-md:overflow-x-scroll max-md:w-full">
            <thead className=" mb-5">
              <tr className="h-[80px]">
                <th className="table-head">خدمات</th>
                <th className="table-head">خرید لپ تاپ</th>
                <th className="table-head">فروشگاه اینترنتی</th>
                <th className="table-head">پشتیبانی</th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-[50px] font-semibold text-lg">
                <td className="table-data">قیمت لپ تاپ</td>
                <td className="table-data">انتخاب هوشمند لپ تاپ</td>
                <td className="table-data">درباره ما </td>
                <td className="table-data">شنبه تا پنج شنبه ۸:۳۰ الی ۱۸:۳۰</td>
              </tr>
              <tr className="h-[50px] font-semibold text-lg">
                <td className="table-data">خرید لپ تاپ دست دوم</td>
                <td className="table-data">قیمت لپ تاپ لنوو</td>
                <td className="table-data">تماس با ما</td>
                <td className="table-data">Technoshop@gmail.com </td>
              </tr>
              <tr className="h-[50px] font-semibold text-lg">
                <td className="table-data">گارانتی</td>
                <td className="table-data">قیمت لپ تاپ ایسوس</td>
                <td className="table-data">شرایط و قوانین</td>
                <td className="table-data">تلفن امور مشتریان : ۰۲۱-۱۲۳۴۵۶</td>
              </tr>
              <tr className="h-[50px] font-semibold text-lg">
                <td className="table-data">خرید اقساطی</td>
                <td className="table-data">قیمت لپ تاپ اچ پی</td>
                <td className="table-data">نظرات کاربران</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col justify-between w-1/4 py-5 max-md:hidden">
          <Link href="/" className="flex items-center justify-center gap-3">
            <Image alt="tecnoshop" src={logo} width={56} height={63} />
            <p className="text-2xl font-semibold text-main">تکنو شاپ</p>{" "}
          </Link>
          <div className="flex flex-col flex-gap gap-5">
            <h1 className="text-[14px] font-semibold text-main">
              آدرس فروشگاه تکنو شاپ
            </h1>
            <p className="text-[12px] font-extralight text-main">
              تهران، خیابان ولیعصر، بالاتر از زرتشت، کوچه جاوید، پلاک ۲۴ کد
              پستی: ۱۵۹۴۸۴۳۸۱۲
            </p>
          </div>
          <div className="flex justify-between items-center">
            <Image alt="" src="/enamad1.jpg" width={77} height={90} />
            <Image alt="" src="/enamad2.jpg" width={77} height={90} />
            <Image alt="" src="/enamad3.jpg" width={77} height={90} />
          </div>
        </div>
      </div>
      <div>
        <p className="flex items-center justify-center text-white text-[12px] font-semibold h-[60px] bg-main text-center -mx-[100px] px-[100px]">
          تمامی حقوق مادی و معنوی این سایت متعلق به تکنوشاپ می‌باشد.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
