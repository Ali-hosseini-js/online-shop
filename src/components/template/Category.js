import { category } from "@/data/category";
import CategoryCard from "@/module/CategoryCard";

function Category() {
  return (
    <div className="flex flex-wrap justify-center gap-6 items-center">
      {category.map((category, index) => (
        <CategoryCard
          key={index}
          href={category.href}
          image={category.image}
          alt={category.alt}
          description={category.description}
        />
      ))}
    </div>
  );
}

export default Category;
