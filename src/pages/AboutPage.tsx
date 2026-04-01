import { motion } from "framer-motion";
import { FiAward, FiHeart, FiStar } from "react-icons/fi";

const milestones = [
  { year: "1993", title: "The Beginning", desc: "Apurva Sweets founded in Chennai with a small sweet shop" },
  { year: "2000", title: "Bakery Launch", desc: "Expanded into cakes, pastries and bakery items" },
  { year: "2005", title: "Chaat Corner", desc: "Added popular street food & chaat section" },
  { year: "2010", title: "10,000 Customers", desc: "Crossed 10,000 happy customers milestone" },
  { year: "2015", title: "New Branches", desc: "Opened multiple branches across Chennai" },
  { year: "2020", title: "Online Orders", desc: "Launched online ordering and home delivery" },
  { year: "2024", title: "30+ Years Legacy", desc: "Celebrating 30 years of sweetness and trust" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">

      {/* HERO */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-sweets.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <img src="/images/logo.jpeg" alt="Apurva" className="w-20 h-20 rounded-full mx-auto mb-6 shadow-xl border-2 border-accent" />
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
              About Us
            </h1>
            <p className="text-primary-foreground/80 mt-4 text-lg max-w-2xl mx-auto">
              Since 1993, Apurva Sweets & Bakery has been crafting the finest Indian sweets and bakery delights with authentic recipes passed down through generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FiAward, title: "33+ Years", desc: "Of delicious tradition and excellence" },
              { icon: FiHeart, title: "100% Fresh", desc: "Made with love and pure ingredients daily" },
              { icon: FiStar, title: "10,000+", desc: "Happy customers and counting" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-card rounded-2xl p-8 shadow-card"
              >
                <item.icon size={36} className="mx-auto text-primary mb-4" />
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ JOURNEY (CORRECT POSITION) */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Our Journey
            </h2>
            <p className="text-muted-foreground mt-2">
              Milestones that made us who we are
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">

            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full -translate-x-1/2 hidden md:block" />
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full md:hidden" />

            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                <div className={`md:w-[calc(50%-2rem)] ml-14 md:ml-0 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"
                  }`}>
                  <div className="bg-card rounded-2xl p-5 shadow-card">
                    <span className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full mb-2">
                      {m.year}
                    </span>
                    <h3 className="font-bold">{m.title}</h3>
                    <p className="text-sm text-muted-foreground">{m.desc}</p>
                  </div>
                </div>

                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white" />

                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10">Our Story</h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img src="/images/hero-sweets.jpg" className="rounded-2xl" />

            <div>
              <p>Started in 1993 in Chennai...</p>
              <p>We use pure ghee, fresh milk...</p>
              <p>We are part of thousands of happy moments...</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;