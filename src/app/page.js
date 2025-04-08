import BlogMain from "@/template/BlogMain";
import Brands from "@/template/Brands";
import Category from "@/template/Category";
import Hero from "@/template/Hero";
import Newest from "@/template/Newest";
import Services from "@/template/Services";
import SingleHero from "@/template/singleHero";
import SpecialOffer from "@/template/SpecialOffer";
import SpecificHero from "@/template/SpecificHero";
import Suggestions from "@/template/Suggestions";
import UserQuestions from "@/template/UserQuestions";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="flex flex-col gap-[70px]">
      <Hero />
      <Category />
      <SpecialOffer />
      <Newest />
      <SpecificHero />
      <Suggestions />
      <Brands />
      <SingleHero />
      <UserQuestions />
      <BlogMain />
      <Services />
      <Toaster />
    </div>
  );
}
