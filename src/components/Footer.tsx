import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img src="/images/logo.jpeg" alt="Logo" className="w-12 h-12 rounded-full" />
          <div>
            <h3 className="font-display text-xl font-bold">Apurva</h3>
            <p className="text-xs opacity-80">Sweets & Bakery · Since 1993</p>
          </div>
        </div>
        <p className="text-sm opacity-80 leading-relaxed">Crafting delicious moments with fresh, authentic Indian sweets and bakery items for over 30 years.</p>
      </div>
      <div>
        <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
        <div className="space-y-2 text-sm opacity-80">
          <Link to="/" className="block hover:opacity-100 transition-opacity">Home</Link>
          <Link to="/menu" className="block hover:opacity-100 transition-opacity">Full Menu</Link>
          <Link to="/category/sweets" className="block hover:opacity-100 transition-opacity">Sweets</Link>
          <Link to="/category/cakes" className="block hover:opacity-100 transition-opacity">Cakes</Link>
          <Link to="/about" className="block hover:opacity-100 transition-opacity">About Us</Link>
          <Link to="/contact" className="block hover:opacity-100 transition-opacity">Contact</Link>
        </div>
      </div>
      <div>
        <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
        <div className="space-y-3 text-sm opacity-80">
          <p className="flex items-center gap-2"><FiMapPin /> Palla Street, Chennai, Tamil Nadu</p>
          <p className="flex items-center gap-2"><FiPhone /> +91 98765 43210</p>
          <a href="mailto:apurvasweets@gmail.com" className="flex items-center gap-2 hover:opacity-100 transition-opacity"><FiMail /> apurvasweets@gmail.com</a>
        </div>
        <div className="flex gap-4 mt-4">
          <a href="https://www.instagram.com/apurvasnb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <FiInstagram size={20} />
          </a>
          <a href="https://www.facebook.com/apurvasnb" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <FiFacebook size={20} />
          </a>
          <a href="https://twitter.com/apurvasweets" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <FiTwitter size={20} />
          </a>
        </div>
      </div>
      <div>
        <h4 className="font-display text-lg font-semibold mb-4">Working Hours</h4>
        <div className="space-y-2 text-sm opacity-80">
          <p>Mon - Sat: 8:00 AM - 10:00 PM</p>
          <p>Sunday: 9:00 AM - 9:00 PM</p>
          <p>Festivals: Open Extended Hours</p>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-4 text-center text-xs opacity-60">
      &copy; 2024 Apurva Sweets & Bakery. All rights reserved.
    </div>
  </footer>
);

export default Footer;
