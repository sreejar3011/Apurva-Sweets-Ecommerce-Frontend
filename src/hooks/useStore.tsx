import React, { createContext, useContext, useState, useCallback } from "react";
import { Product } from "@/data/products";

interface CartItem {
  product: Product;
  quantity: number;
  weight: string;
}

interface User {
  name: string;
  email: string;
}

interface StoreContextType {
  cart: CartItem[];
  addToCart: (product: Product, weight: string) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, delta: number) => void;
  cartCount: number;
  cartTotal: number;
  user: User | null;
  login: (name: string, email: string) => void;
  logout: () => void;
  toast: string | null;
  showToast: (msg: string) => void;
}

const StoreContext = createContext<StoreContextType | null>(null);

export const useStore = () => {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
};

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }, []);

  const addToCart = useCallback((product: Product, weight: string) => {
    setCart(prev => {
      const existing = prev.find(i => i.product.id === product.id && i.weight === weight);
      if (existing) return prev.map(i => i.product.id === product.id && i.weight === weight ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { product, quantity: 1, weight }];
    });
    showToast(`${product.name} added to cart!`);
  }, [showToast]);

  const removeFromCart = useCallback((productId: number) => {
    setCart(prev => prev.filter(i => i.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: number, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.product.id === productId) {
        const newQty = i.quantity + delta;
        return newQty > 0 ? { ...i, quantity: newQty } : i;
      }
      return i;
    }).filter(i => i.quantity > 0));
  }, []);

  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);
  const cartTotal = cart.reduce((s, i) => s + i.product.price * i.quantity, 0);

  const login = useCallback((name: string, email: string) => setUser({ name, email }), []);
  const logout = useCallback(() => { setUser(null); setCart([]); }, []);

  return (
    <StoreContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, cartCount, cartTotal, user, login, logout, toast, showToast }}>
      {children}
    </StoreContext.Provider>
  );
};
