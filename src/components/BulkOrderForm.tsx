import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiCheckCircle, FiUser, FiPhone, FiMail, FiPackage, FiHash } from "react-icons/fi";

const BulkOrderForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", details: "", quantity: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", details: "", quantity: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const inputClass = "w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm";

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-3">Bulk Orders</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Request a Bulk Order Quote</h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Planning a celebration or corporate event? Get special pricing on bulk orders of sweets, cakes & snacks.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
          <div className="bg-card rounded-3xl p-8 shadow-premium">
            {submitted ? (
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10">
                <FiCheckCircle size={56} className="mx-auto text-green-500 mb-4" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">Quote Request Sent!</h3>
                <p className="text-muted-foreground">We'll get back to you within 24 hours with the best pricing.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input type="text" placeholder="Your Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={inputClass} />
                  </div>
                  <div className="relative">
                    <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input type="tel" placeholder="Phone Number" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input type="email" placeholder="Email Address" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputClass} />
                  </div>
                  <div className="relative">
                    <FiHash className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input type="text" placeholder="Quantity (e.g. 50 boxes)" required value={form.quantity} onChange={e => setForm({ ...form, quantity: e.target.value })} className={inputClass} />
                  </div>
                </div>
                <div className="relative">
                  <FiPackage className="absolute left-4 top-4 text-muted-foreground" />
                  <textarea placeholder="Order Details (items, occasion, special requests...)" required value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} rows={4} className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm resize-none" />
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors disabled:opacity-70"
                >
                  {loading ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full" />
                  ) : (
                    <>Get Quote <FiSend /></>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BulkOrderForm;
