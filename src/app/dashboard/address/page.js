import AddressForm from "@/module/address/AddressForm";
import AddressList from "@/module/address/AddressList";
import ShippingForm from "@/module/shipping/ShippingForm";
import ShippingList from "@/module/shipping/ShippingList";
import { Toaster } from "react-hot-toast";

function Address() {
  // if (!data) redirect("/");

  return (
    <div className="w-full">
      <div className="flex flex-col m-5 justify-center gap-5">
        <p className="text-main text-xl border-b-[1px] border-opinion mb-5">
          ایجاد آدرس جدید
        </p>
        <AddressForm />
        <p className="text-main text-xl border-b-[1px] border-opinion mb-5">
          لیست آدرس های شما
        </p>
        <AddressList />
      </div>
      <Toaster />
    </div>
  );
}

export default Address;
