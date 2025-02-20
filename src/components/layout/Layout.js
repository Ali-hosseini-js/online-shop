import Header from "@/template/Header";
import Footer from "@/template/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
