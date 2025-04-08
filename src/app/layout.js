import { vazir } from "@/utils/fonts";
import "./globals.css";
import Layout from "@/layout/Layout";
import NextAuthProvider from "src/provider/NextAuthProvider";
import CartProvider from "src/context/CartContext";

export const metadata = {
  title: "تکنو شاپ",
  description: "فروشگاه لوازم دیجیتال",
  icons: { icon: "logo.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        <NextAuthProvider>
          <CartProvider>
            <Layout>{children}</Layout>
          </CartProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
