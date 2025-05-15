import ProductFrom from "@/module/product/ProductForm";
import ProductList from "@/module/product/ProductList";
import { Toaster } from "react-hot-toast";

function ShippingControll() {
  // if (!data) redirect("/");

  return (
    <div className="w-full">
      <div className="flex flex-col m-5 justify-center gap-5">
        روش ارسال{" "}
        <p className="text-main text-xl border-b-[1px] border-opinion mb-5"></p>
        {/* <ProductFrom /> */}
        <p className="text-main text-xl border-b-[1px] border-opinion mb-5">
          لیست روش های ارسال{" "}
        </p>
        {/* <ProductList />{" "} */}
      </div>
      <Toaster />
    </div>
  );
}

export default ShippingControll;
