import Brands from "@/template/Brands";
import Category from "@/template/Category";
import Hero from "@/template/Hero";
import List from "@/template/List";
import Newest from "@/template/Newest";
import SingleHero from "@/template/singleHero";
import SpecialOffer from "@/template/SpecialOffer";
import SpecificHero from "@/template/SpecificHero";
import Suggestions from "@/template/Suggestions";
import UserQuestions from "@/template/UserQuestions";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <List />
      <Hero />
      <Category />
      <SpecialOffer />
      <Newest />
      <SpecificHero />
      <Suggestions />
      <Brands />
      <SingleHero />
      <UserQuestions />
    </div>
  );
}
