import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">Contact Us</h1>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Visit us or get in touch — we'd love to hear from you!</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Google Map - Chennai location */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="rounded-2xl overflow-hidden shadow-premium h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d692.6965955291855!2d80.09644073942863!3d12.997711831720977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528aa3ffffff8d%3A0xb9fa36cd635301db!2sAPURVA%20SWEETS%20%26%20BAKERY%20PALLA%20STREET!5e0!3m2!1sen!2sin!4v1774859646576!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Apurva Sweets & Bakery Location"
            />
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-5">
            {[
              {
                icon: FiMapPin,
                title: "Visit Us",
                lines: ["Palla Street, Kundrathur", "Chennai, Tamil Nadu - 600069", "Near Kundrathur Bus Stand"],
              },
              {
                icon: FiPhone,
                title: "Call Us",
                lines: ["+91 98765 43210", "+91 12345 67890"],
              },
              {
                icon: FiMail,
                title: "Email Us",
                lines: ["apurvasweets@gmail.com", "orders@apurvasweets.com"],
                isEmail: true,
              },
              {
                icon: FiClock,
                title: "Working Hours",
                lines: ["Mon - Sat: 8:00 AM - 10:00 PM", "Sunday: 9:00 AM - 9:00 PM", "Festivals: Extended Hours"],
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-premium transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">{item.title}</h3>
                    {item.lines.map((line, j) =>
                      item.isEmail ? (
                        <a key={j} href={`mailto:${line}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">{line}</a>
                      ) : (
                        <p key={j} className="text-sm text-muted-foreground">{line}</p>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
