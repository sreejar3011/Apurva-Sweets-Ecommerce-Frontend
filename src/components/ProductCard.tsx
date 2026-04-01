import { motion } from "framer-motion";
import { FiStar, FiShoppingCart } from "react-icons/fi";
import { Product } from "@/data/products";
import { useStore } from "@/hooks/useStore";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">&#8377;{product.price}</div>
        </div>
      </Link>
      <div className="p-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display text-sm font-bold text-foreground leading-tight">{product.name}</h3>
        </Link>
        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{product.description}</p>
        <div className="flex items-center gap-1 mt-1.5">
          <FiStar className="text-accent fill-current" size={12} />
          <span className="text-xs font-medium text-foreground">{product.rating}</span>
          <span className="text-[10px] text-muted-foreground">({product.reviews.length})</span>
        </div>
        {/* Top review snippet */}
        {product.reviews.length > 0 && (
          <p className="text-[10px] text-muted-foreground mt-1 italic line-clamp-1">
            &ldquo;{product.reviews[0].comment}&rdquo; — {product.reviews[0].user}
          </p>
        )}
        <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
          {product.weights.map(w => (
            <span key={w} className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground">{w}</span>
          ))}
        </div>
        <button
          onClick={() => addToCart(product, product.weights[0])}
          className="mt-2 w-full flex items-center justify-center gap-1.5 bg-primary text-primary-foreground py-2 rounded-lg text-xs font-semibold hover:bg-primary-dark transition-colors active:scale-95"
        >
          <FiShoppingCart size={13} /> Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
