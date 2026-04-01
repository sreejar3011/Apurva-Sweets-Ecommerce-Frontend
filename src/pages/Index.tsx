import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiStar, FiTruck, FiAward } from "react-icons/fi";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import BulkOrderForm from "@/components/BulkOrderForm";

const milestones = [
  { year: "1993", title: "The Beginning", desc: "Apurva Sweets founded in Chennai with a small sweet shop" },
  { year: "2000", title: "Bakery Launch", desc: "Expanded into cakes, pastries and bakery items" },
  { year: "2005", title: "Chaat Corner", desc: "Added popular street food & chaat section" },
  { year: "2010", title: "10,000 Customers", desc: "Crossed 10,000 happy customers milestone" },
  { year: "2015", title: "New Branches", desc: "Opened multiple branches across Chennai" },
  { year: "2020", title: "Online Orders", desc: "Launched online ordering and home delivery" },
  { year: "2024", title: "30+ Years Legacy", desc: "Celebrating 30 years of sweetness and trust" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-sweets.jpg" alt="Apurva Sweets" className="w-full h-full object-cover animate-slow-zoom" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <img src="/images/logo.jpeg" alt="Apurva" className="w-20 h-20 rounded-full mx-auto mb-5 shadow-xl border-2 border-gold-light" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            Delicious Moments, <br />
            <span className="text-gradient-gold">Crafted Fresh Daily</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-5 text-lg md:text-xl text-primary-foreground/80 font-body max-w-2xl mx-auto">
            Premium Indian sweets & bakery, lovingly made with authentic recipes since 1993
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="mt-7 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg btn-glow hover:bg-primary-dark transition-all active:scale-95">
              Order Now <FiArrowRight />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 glass text-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-background/90 transition-all">
              Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-primary text-primary-foreground py-5">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {[
            { icon: FiAward, title: "Premium Quality", desc: "100% fresh ingredients" },
            { icon: FiTruck, title: "Fast Delivery", desc: "Same day delivery available" },
            { icon: FiStar, title: "Since 1993", desc: "30+ years of trust" },
          ].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center justify-center gap-3">
              <f.icon size={24} className="text-accent" />
              <div className="text-left">
                <p className="font-semibold text-sm">{f.title}</p>
                <p className="text-xs opacity-80">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Explore Our Menu</h2>
            <p className="text-muted-foreground mt-2">Handcrafted with love, served with joy</p>
          </motion.div>
          <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((cat, i) => (
              <motion.div key={cat.slug} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to={`/category/${cat.slug}`} className="block group text-center">
                  <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden shadow-card group-hover:shadow-premium transition-all duration-300 ring-2 ring-transparent group-hover:ring-primary">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <p className="mt-2 text-xs font-semibold text-foreground">{cat.name}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">All Our Delights</h2>
            <p className="text-muted-foreground mt-2">Browse our entire collection</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      

      {/* Customer Reviews Highlight */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What Our Customers Say</h2>
            <p className="text-muted-foreground mt-2">Real reviews from real food lovers</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {products.filter(p => p.reviews.length > 0 && p.rating >= 4.7).slice(0, 6).map(p => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-5 shadow-card hover:shadow-premium transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img src={p.image} alt={p.name} className="w-12 h-12 rounded-lg object-cover" />
                  <div>
                    <h4 className="font-display text-sm font-bold text-foreground">{p.name}</h4>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, si) => (
                        <FiStar key={si} size={10} className={si < Math.round(p.rating) ? "text-accent fill-accent" : "text-muted-foreground"} />
                      ))}
                      <span className="text-[10px] text-muted-foreground ml-1">{p.rating}</span>
                    </div>
                  </div>
                </div>
                {p.reviews.slice(0, 2).map((r, ri) => (
                  <div key={ri} className="mb-2 last:mb-0">
                    <p className="text-xs text-muted-foreground italic">&ldquo;{r.comment}&rdquo;</p>
                    <p className="text-[10px] text-foreground font-semibold mt-0.5">— {r.user} ({r.rating}/5)</p>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Order Quote */}
      <BulkOrderForm />

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-sweets.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Celebrate Every Occasion</h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">From festivals to family gatherings, make every moment sweeter with Apurva.</p>
            <Link to="/menu" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold btn-glow hover:opacity-90 transition-all">
              Browse Full Menu <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
