import Header from "@/template/Header";
import Footer from "@/template/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="min-h-[700px]">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
