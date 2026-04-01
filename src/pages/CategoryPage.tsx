import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const CategoryPage = () => {
  const { slug } = useParams();
  const category = categories.find(c => c.slug === slug);
  const categoryProducts = products.filter(p => p.category === slug);

  if (!category) return <div className="min-h-screen pt-28 text-center text-muted-foreground">Category not found</div>;

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">{category.name}</h1>
          <p className="text-muted-foreground mt-2">{categoryProducts.length} items</p>
        </motion.div>
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categoryProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No items in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
