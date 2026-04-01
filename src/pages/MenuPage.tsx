import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FiFilter, FiChevronDown } from "react-icons/fi";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

type SortOption = "name-asc" | "price-asc" | "price-desc" | "rating";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortOption>("name-asc");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [showFilters, setShowFilters] = useState(false);

  const maxPrice = useMemo(() => Math.max(...products.map(p => p.price)), []);

  const filteredProducts = useMemo(() => {
    let items = [...products];
    if (selectedCategory !== "all") {
      items = items.filter(p => p.category === selectedCategory);
    }
    items = items.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    switch (sortBy) {
      case "name-asc": items.sort((a, b) => a.name.localeCompare(b.name)); break;
      case "price-asc": items.sort((a, b) => a.price - b.price); break;
      case "price-desc": items.sort((a, b) => b.price - a.price); break;
      case "rating": items.sort((a, b) => b.rating - a.rating); break;
    }
    return items;
  }, [selectedCategory, sortBy, priceRange]);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">Menu</h1>
          <p className="text-muted-foreground mt-2">Explore our complete collection of sweets, cakes & snacks</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card rounded-2xl shadow-card p-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-2 flex-1">
              <button onClick={() => setSelectedCategory("all")} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === "all" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>All</button>
              {categories.map(cat => (
                <button key={cat.slug} onClick={() => setSelectedCategory(cat.slug)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat.slug ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>{cat.name}</button>
              ))}
            </div>
            <div className="relative">
              <select value={sortBy} onChange={e => setSortBy(e.target.value as SortOption)} className="appearance-none bg-muted text-foreground px-4 py-2 pr-8 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer">
                <option value="name-asc">A-Z</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={14} />
            </div>
            <button onClick={() => setShowFilters(!showFilters)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${showFilters ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
              <FiFilter size={14} /> Filter
            </button>
          </div>
          {showFilters && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-sm font-medium text-foreground">Price Range:</span>
                <div className="flex items-center gap-3 flex-1 max-w-md">
                  <span className="text-sm text-muted-foreground">&#8377;{priceRange[0]}</span>
                  <input type="range" min={0} max={maxPrice} value={priceRange[0]} onChange={e => setPriceRange([Math.min(Number(e.target.value), priceRange[1]), priceRange[1]])} className="flex-1 accent-primary h-2" />
                  <input type="range" min={0} max={maxPrice} value={priceRange[1]} onChange={e => setPriceRange([priceRange[0], Math.max(Number(e.target.value), priceRange[0])])} className="flex-1 accent-primary h-2" />
                  <span className="text-sm text-muted-foreground">&#8377;{priceRange[1]}</span>
                </div>
                <button onClick={() => setPriceRange([0, maxPrice])} className="text-xs text-primary hover:underline">Reset</button>
              </div>
            </motion.div>
          )}
        </motion.div>

        <p className="text-sm text-muted-foreground mb-4">{filteredProducts.length} items found</p>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No items match your filters.</p>
            <button onClick={() => { setSelectedCategory("all"); setPriceRange([0, maxPrice]); }} className="mt-4 text-primary font-semibold hover:underline">Clear Filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
