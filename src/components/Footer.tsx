import { Instagram, Mail, Heart, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white to-muted/30 border-t border-border/50 mt-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border-[30px] border-primary rounded-full" />
        <div className="absolute bottom-10 right-20 w-96 h-96 border-[40px] border-primary rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                <Sparkles className="w-7 h-7 text-foreground" />
              </div>
              <span className="text-2xl tracking-tighter">ARTISTE</span>
            </motion.div>
            <p className="text-lg text-muted-foreground max-w-sm leading-relaxed mb-6">
              Where fashion becomes art. Discover unique designs from India's most talented boutique artists.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Heart className="w-4 h-4 fill-primary text-primary" />
              <span>Made with love for fashion & art</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg">Explore</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="/designers"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Artists
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-6 text-lg">Connect</h4>
            <p className="text-muted-foreground mb-6">
              Follow our journey and discover new artists
            </p>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="#"
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                href="#"
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} Artiste. Celebrating fashion as art.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
