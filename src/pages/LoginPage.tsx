import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiUser, FiSmartphone } from "react-icons/fi";
import { useStore } from "@/hooks/useStore";
import { useNavigate, useSearchParams } from "react-router-dom";

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useStore();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (isSignup) {
      if (!name.trim()) { setError("Name is required"); return; }
      if (password.length < 6) { setError("Password must be at least 6 characters"); return; }
      if (password !== confirmPassword) { setError("Passwords don't match"); return; }
    }
    const identifier = loginMethod === "email" ? email : phone;
    if (!identifier.trim()) { setError(`${loginMethod === "email" ? "Email" : "Phone"} is required`); return; }
    login(isSignup ? name : (loginMethod === "email" ? email.split("@")[0] : "User"), identifier);
    const redirect = searchParams.get("redirect") || "/";
    navigate(redirect);
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-4 relative" style={{ backgroundImage: "url(/images/hero-sweets.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-primary/70" />
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative z-10 w-full max-w-md glass rounded-3xl p-8 shadow-premium">
        <div className="text-center mb-8">
          <img src="/images/logo.jpeg" alt="Apurva" className="w-16 h-16 rounded-full mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold text-foreground">{isSignup ? "Create Account" : "Welcome Back"}</h2>
          <p className="text-muted-foreground text-sm mt-1">{isSignup ? "Join Apurva family" : "Sign in to continue"}</p>
        </div>
        {!isSignup && (
          <div className="flex bg-muted rounded-full p-1 mb-6">
            <button onClick={() => setLoginMethod("email")} className={`flex-1 py-2 rounded-full text-sm font-medium transition-all ${loginMethod === "email" ? "bg-primary text-primary-foreground" : "text-foreground"}`}>Email</button>
            <button onClick={() => setLoginMethod("phone")} className={`flex-1 py-2 rounded-full text-sm font-medium transition-all ${loginMethod === "phone" ? "bg-primary text-primary-foreground" : "text-foreground"}`}>Phone</button>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <div className="relative">
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
          )}
          {loginMethod === "email" || isSignup ? (
            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
          ) : (
            <div className="relative">
              <FiSmartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input type="tel" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
          )}
          <div className="relative">
            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          {isSignup && (
            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
          )}
          {error && <p className="text-destructive text-sm">{error}</p>}
          <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors">{isSignup ? "Sign Up" : "Sign In"}</button>
        </form>
        <p className="text-center text-sm text-muted-foreground mt-6">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button onClick={() => setIsSignup(!isSignup)} className="text-primary font-semibold hover:underline">{isSignup ? "Sign In" : "Sign Up"}</button>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
