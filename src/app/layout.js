import { vazir } from "@/utils/fonts";
import "./globals.css";
import Layout from "@/layout/Layout";

export const metadata = {
  title: "تکنو شاپ",
  description: "فروشگاه لوازم دیجیتال",
  icons: { icon: "logo.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
