import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiTrash2, FiMinus, FiPlus, FiShoppingBag, FiCheck } from "react-icons/fi";
import { useStore } from "@/hooks/useStore";
import { Link, useNavigate } from "react-router-dom";

const OrderSuccess = ({ onClose }: { onClose: () => void }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
    <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15 }} className="bg-card rounded-3xl p-10 text-center shadow-premium max-w-sm mx-4">
      <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-5">
        <FiCheck className="text-primary-foreground" size={40} strokeWidth={3} />
      </div>
      <h2 className="font-display text-2xl font-bold text-foreground mb-2">Order Placed!</h2>
      <p className="text-muted-foreground mb-6">Your delicious order is being prepared. Thank you for choosing Apurva Sweets & Bakery!</p>
      <Link to="/" onClick={onClose} className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors">Continue Shopping</Link>
    </motion.div>
  </motion.div>
);

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, user } = useStore();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    if (!user) { navigate("/login?redirect=/cart"); return; }
    setOrderPlaced(true);
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen pt-28 flex flex-col items-center justify-center text-center px-4">
        <FiShoppingBag size={64} className="text-muted-foreground mb-4" />
        <h2 className="font-display text-2xl font-bold text-foreground">Your cart is empty</h2>
        <p className="text-muted-foreground mt-2">Add some delicious sweets!</p>
        <Link to="/" className="mt-6 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors">Browse Menu</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <AnimatePresence>{orderPlaced && <OrderSuccess onClose={() => setOrderPlaced(false)} />}</AnimatePresence>
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl font-bold text-foreground mb-8">Your Cart</motion.h1>
        <div className="space-y-4">
          {cart.map(item => (
            <motion.div key={`${item.product.id}-${item.weight}`} layout initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="flex gap-4 bg-card rounded-2xl p-4 shadow-card">
              <img src={item.product.image} alt={item.product.name} className="w-24 h-24 rounded-xl object-cover" />
              <div className="flex-1">
                <h3 className="font-display font-bold text-foreground">{item.product.name}</h3>
                <p className="text-xs text-muted-foreground">{item.weight}</p>
                <p className="text-primary font-bold mt-1">&#8377;{item.product.price * item.quantity}</p>
              </div>
              <div className="flex flex-col items-end justify-between">
                <button onClick={() => removeFromCart(item.product.id)} className="text-muted-foreground hover:text-destructive transition-colors"><FiTrash2 size={16} /></button>
                <div className="flex items-center gap-2 bg-muted rounded-full px-2 py-1">
                  <button onClick={() => updateQuantity(item.product.id, -1)} className="p-1 hover:text-primary"><FiMinus size={14} /></button>
                  <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product.id, 1)} className="p-1 hover:text-primary"><FiPlus size={14} /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 bg-card rounded-2xl p-6 shadow-card">
          <div className="flex justify-between text-lg font-bold text-foreground">
            <span>Total</span>
            <span className="text-primary">&#8377;{cartTotal}</span>
          </div>
          <button onClick={handleCheckout} className="mt-4 w-full bg-primary text-primary-foreground py-4 rounded-2xl font-semibold text-lg hover:bg-primary-dark transition-colors btn-glow active:scale-95">
            {user ? "Place Order" : "Login to Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
