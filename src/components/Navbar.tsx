import { useState, useEffect, useRef, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX, FiChevronDown, FiLogOut } from "react-icons/fi";
import { useStore } from "@/hooks/useStore";
import { categories, products } from "@/data/products";
import logo from "../assets/logo-apurva.png";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartCount, user, logout } = useStore();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return products.filter(
      p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [searchQuery]);

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? <mark key={i} className="bg-accent/40 rounded px-0.5">{part}</mark> : part
    );
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setDropdownOpen(false);
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) setProfileOpen(false);
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const navLinkClass = `text-sm font-medium transition-colors hover:text-accent ${scrolled ? "text-foreground" : "text-primary-foreground"}`;
  const iconBtnClass = `p-2 rounded-full transition-colors ${scrolled ? "hover:bg-muted text-foreground" : "hover:bg-primary-dark text-primary-foreground"}`;

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-premium py-2" : "bg-primary py-3"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.img
            src={logo }
            alt="Apurva Sweets & Bakery"
            className={`rounded-full transition-all duration-300 ${scrolled ? "h-9 w-9" : "h-12 w-12"}`}
            whileHover={{ scale: 1.1 }}
          />
          <div className={`transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            <h1 className="font-display text-base md:text-lg font-bold leading-tight">Apurva</h1>
            <p className="text-[9px] md:text-[10px] font-body opacity-80 -mt-0.5">Sweets & Bakery</p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-5">
          <Link to="/" className={navLinkClass}>Home</Link>
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className={`flex items-center gap-1 ${navLinkClass}`}>
              Menu <FiChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="absolute top-full mt-2 w-48 glass rounded-lg shadow-premium overflow-hidden">
                  {categories.map(cat => (
                    <Link key={cat.slug} to={`/category/${cat.slug}`} onClick={() => setDropdownOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-primary/5 transition-colors">
                      <img src={cat.image} alt={cat.name} className="w-7 h-7 rounded-full object-cover" />
                      {cat.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link to="/about" className={navLinkClass}>About</Link>
          <Link to="/contact" className={navLinkClass}>Contact</Link>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => setSearchOpen(!searchOpen)} className={iconBtnClass}><FiSearch size={18} /></button>
          <Link to="/cart" className={`relative ${iconBtnClass}`}>
            <FiShoppingCart size={18} />
            {cartCount > 0 && (
              <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </motion.span>
            )}
          </Link>
          {user ? (
            <div className="relative" ref={profileRef}>
              <button onClick={() => setProfileOpen(!profileOpen)} className="w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-sm">
                {user.name[0].toUpperCase()}
              </button>
              <AnimatePresence>
                {profileOpen && (
                  <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="absolute right-0 top-full mt-2 w-44 glass rounded-lg shadow-premium overflow-hidden">
                    <div className="px-4 py-2.5 border-b border-border">
                      <p className="text-sm font-semibold">Hi, {user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                    <Link to="/cart" onClick={() => setProfileOpen(false)} className="block px-4 py-2 text-sm hover:bg-primary/5">My Orders</Link>
                    <button onClick={() => { logout(); setProfileOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-primary/5 flex items-center gap-2 text-destructive">
                      <FiLogOut /> Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link to="/login" className={iconBtnClass}><FiUser size={18} /></Link>
          )}
          <button onClick={() => setMenuOpen(!menuOpen)} className={`lg:hidden ${iconBtnClass}`}>
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
            <div ref={searchRef} className="container mx-auto px-4 py-3 relative">
              <form onSubmit={handleSearch} className="relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input type="text" placeholder="Search sweets, cakes, snacks..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} autoFocus className="w-full pl-12 pr-4 py-2.5 rounded-full bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm" />
              </form>
              <AnimatePresence>
                {searchQuery.trim() && searchResults.length > 0 && (
                  <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="absolute left-4 right-4 top-full mt-1 bg-background border border-border rounded-xl shadow-premium z-50 max-h-80 overflow-y-auto">
                    {searchResults.map(p => (
                      <Link key={p.id} to={`/product/${p.id}`} onClick={() => { setSearchOpen(false); setSearchQuery(""); }} className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted/50 transition-colors">
                        <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">{highlightMatch(p.name, searchQuery)}</p>
                          <p className="text-xs text-muted-foreground">{p.price} · {p.category}</p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden overflow-hidden glass">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <Link to="/" onClick={() => setMenuOpen(false)} className="block text-foreground font-medium py-2">Home</Link>
              <Link to="/menu" onClick={() => setMenuOpen(false)} className="block text-foreground font-medium py-2">Full Menu</Link>
              {categories.map(cat => (
                <Link key={cat.slug} to={`/category/${cat.slug}`} onClick={() => setMenuOpen(false)} className="block text-muted-foreground text-sm py-1 pl-4">{cat.name}</Link>
              ))}
              <Link to="/about" onClick={() => setMenuOpen(false)} className="block text-foreground font-medium py-2">About</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="block text-foreground font-medium py-2">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
