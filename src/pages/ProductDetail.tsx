import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FiStar, FiShoppingCart, FiSend } from "react-icons/fi";
import { products } from "@/data/products";
import { useStore } from "@/hooks/useStore";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const { addToCart } = useStore();
  const [selectedWeight, setSelectedWeight] = useState(product?.weights[0] || "");
  const [reviewName, setReviewName] = useState("");
  const [reviewComment, setReviewComment] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [localReviews, setLocalReviews] = useState(product?.reviews || []);

  if (!product) return <div className="min-h-screen pt-28 text-center text-muted-foreground">Product not found</div>;

  const handleReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName.trim() || !reviewComment.trim()) return;
    setLocalReviews(prev => [...prev, { user: reviewName, rating: reviewRating, comment: reviewComment }]);
    setReviewName("");
    setReviewComment("");
    setReviewRating(5);
  };

  const avgRating = localReviews.length > 0
    ? (localReviews.reduce((s, r) => s + r.rating, 0) / localReviews.length).toFixed(1)
    : product.rating;

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="rounded-2xl overflow-hidden shadow-premium aspect-square">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col justify-center">
            <h1 className="font-display text-3xl font-bold text-foreground">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <FiStar className="text-accent fill-accent" />
              <span className="font-semibold">{avgRating}</span>
              <span className="text-muted-foreground text-sm">({localReviews.length} reviews)</span>
            </div>
            <p className="text-muted-foreground mt-3">{product.description}</p>
            <p className="text-3xl font-bold text-primary mt-4">&#8377;{product.price}</p>
            <div className="mt-4">
              <p className="text-sm font-medium text-foreground mb-2">Select Weight</p>
              <div className="flex gap-2">
                {product.weights.map(w => (
                  <button key={w} onClick={() => setSelectedWeight(w)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedWeight === w ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/80"}`}>{w}</button>
                ))}
              </div>
            </div>
            <button onClick={() => addToCart(product, selectedWeight)} className="mt-6 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors btn-glow active:scale-95">
              <FiShoppingCart /> Add to Cart
            </button>
          </motion.div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-foreground mb-6">Customer Reviews ({localReviews.length})</h3>
          <form onSubmit={handleReview} className="bg-card rounded-xl p-5 shadow-card mb-8">
            <h4 className="font-semibold text-foreground mb-3">Write a Review</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <input type="text" placeholder="Your Name" value={reviewName} onChange={e => setReviewName(e.target.value)} required className="px-4 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Rating:</span>
                {[1, 2, 3, 4, 5].map(s => (
                  <button key={s} type="button" onClick={() => setReviewRating(s)}>
                    <FiStar size={18} className={s <= reviewRating ? "text-accent fill-accent" : "text-muted-foreground"} />
                  </button>
                ))}
              </div>
            </div>
            <textarea placeholder="Share your experience..." rows={3} value={reviewComment} onChange={e => setReviewComment(e.target.value)} required className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none mb-3" />
            <button type="submit" className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors">
              <FiSend size={14} /> Submit Review
            </button>
          </form>
          <div className="space-y-3">
            {localReviews.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-muted rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">{r.user[0]}</div>
                  <span className="font-semibold text-sm text-foreground">{r.user}</span>
                  <div className="flex items-center gap-0.5 ml-auto">
                    {[...Array(5)].map((_, si) => (
                      <FiStar key={si} size={12} className={si < r.rating ? "text-accent fill-accent" : "text-muted-foreground"} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{r.comment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
