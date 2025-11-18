import { Search, Menu, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Artistic */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg"
            >
              <Sparkles className="w-6 h-6 text-foreground" />
            </motion.div>
            <span className="hidden sm:block text-xl tracking-tighter group-hover:text-primary transition-colors">
              ARTISTE
            </span>
          </Link>

          {/* Desktop Search - Artistic */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search for art & designers..."
                className="w-full pl-14 pr-6 py-3.5 rounded-full bg-muted/50 border-2 border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/designers"
              className="relative group py-2"
            >
              <span className="transition-colors group-hover:text-primary">
                Artists
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              to="/products"
              className="relative group py-2"
            >
              <span className="transition-colors group-hover:text-primary">
                Gallery
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="rounded-full bg-primary hover:bg-primary/90 text-foreground px-6"
              >
                Explore
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] rounded-l-3xl">
                <div className="flex flex-col gap-8 mt-12">
                  {/* Mobile Search */}
                  <div className="relative">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-12 pr-4 py-3 rounded-full bg-muted border-2 border-transparent focus:border-primary focus:outline-none"
                    />
                  </div>

                  <nav className="flex flex-col gap-6">
                    <Link
                      to="/designers"
                      className="text-xl hover:text-primary transition-colors"
                    >
                      Artists
                    </Link>
                    <Link
                      to="/products"
                      className="text-xl hover:text-primary transition-colors"
                    >
                      Gallery
                    </Link>
                    <Link to="#" className="text-xl hover:text-primary transition-colors">
                      About
                    </Link>
                    <Link to="#" className="text-xl hover:text-primary transition-colors">
                      Contact
                    </Link>
                  </nav>

                  <Button className="rounded-full bg-primary hover:bg-primary/90 text-foreground w-full py-6 text-lg">
                    Explore
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
