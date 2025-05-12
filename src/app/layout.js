import { vazir } from "@/utils/fonts";
import "./globals.css";
import Layout from "@/layout/Layout";
import CartProvider from "src/context/CartContext";
import ReactQueryProvider from "src/provider/ReactQueryProvider";

export const metadata = {
  title: "تکنو شاپ",
  description: "فروشگاه لوازم دیجیتال",
  icons: { icon: "logo.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        <ReactQueryProvider>
          <CartProvider>
            <Layout>{children}</Layout>
          </CartProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
