import { useState } from 'react';
import { motion } from 'motion/react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Filter, Sparkles, X } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('latest');

  const categories = ['Ethnic', 'Western', 'Fusion', 'Bridal'];

  let filteredProducts = [...products];

  // Filter by category
  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === selectedCategory
    );
  }

  // Filter by price range
  if (priceRange) {
    if (priceRange === 'under5000') {
      filteredProducts = filteredProducts.filter((p) => p.price < 5000);
    } else if (priceRange === '5000-10000') {
      filteredProducts = filteredProducts.filter(
        (p) => p.price >= 5000 && p.price <= 10000
      );
    } else if (priceRange === 'above10000') {
      filteredProducts = filteredProducts.filter((p) => p.price > 10000);
    }
  }

  // Sort
  if (sortBy === 'priceLow') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'priceHigh') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const clearFilters = () => {
    setSelectedCategory(null);
    setPriceRange(null);
    setSortBy('latest');
  };

  const hasActiveFilters = selectedCategory || priceRange;

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Artistic Hero */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary/20 via-white to-muted/30 overflow-hidden">
        {/* Decorative Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 right-10 w-72 h-72 border-[35px] border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary rounded-full mb-8"
            >
              <Sparkles className="w-5 h-5" />
              <span>The Gallery</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] mb-8">
              <span className="block">Wearable</span>
              <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground" style={{ fontFamily: 'serif' }}>
                Masterpieces
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover unique designs where craftsmanship meets creativity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-80 flex-shrink-0">
              <div className="sticky top-24 bg-gradient-to-br from-muted/50 to-white rounded-[50px] p-8 shadow-lg border border-border/50">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Filter className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl">Filters</h3>
                </div>

                <div className="space-y-8">
                  {/* Category Filter */}
                  <div>
                    <h4 className="mb-4 text-lg">Category</h4>
                    <div className="space-y-3">
                      {categories.map((cat) => (
                        <motion.label
                          key={cat}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="radio"
                            name="category"
                            checked={selectedCategory === cat}
                            onChange={() =>
                              setSelectedCategory(
                                selectedCategory === cat ? null : cat
                              )
                            }
                            className="w-5 h-5 accent-primary"
                          />
                          <span className="group-hover:text-primary transition-colors">
                            {cat}
                          </span>
                        </motion.label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h4 className="mb-4 text-lg">Price Range</h4>
                    <div className="space-y-3">
                      {[
                        { value: 'under5000', label: 'Under ₹5,000' },
                        { value: '5000-10000', label: '₹5,000 - ₹10,000' },
                        { value: 'above10000', label: 'Above ₹10,000' },
                      ].map((option) => (
                        <motion.label
                          key={option.value}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="radio"
                            name="price"
                            checked={priceRange === option.value}
                            onChange={() => setPriceRange(option.value)}
                            className="w-5 h-5 accent-primary"
                          />
                          <span className="group-hover:text-primary transition-colors">
                            {option.label}
                          </span>
                        </motion.label>
                      ))}
                    </div>
                  </div>

                  {/* Clear Filters */}
                  {hasActiveFilters && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <Button
                        variant="ghost"
                        onClick={clearFilters}
                        className="w-full rounded-full group"
                      >
                        <X className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform" />
                        Clear all
                      </Button>
                    </motion.div>
                  )}
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Mobile Filters */}
              <div className="lg:hidden mb-8 bg-muted/30 rounded-3xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <Select value={selectedCategory || undefined} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="rounded-full border-2">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={priceRange || undefined} onValueChange={setPriceRange}>
                    <SelectTrigger className="rounded-full border-2">
                      <SelectValue placeholder="Price" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under5000">Under ₹5K</SelectItem>
                      <SelectItem value="5000-10000">₹5K - ₹10K</SelectItem>
                      <SelectItem value="above10000">Above ₹10K</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Results Bar */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-xl text-muted-foreground">
                  <span className="text-foreground font-medium">
                    {filteredProducts.length}
                  </span>{' '}
                  piece{filteredProducts.length !== 1 ? 's' : ''} of art
                </p>

                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[200px] rounded-full border-2">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latest">Latest First</SelectItem>
                    <SelectItem value="priceLow">Price: Low to High</SelectItem>
                    <SelectItem value="priceHigh">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product, idx) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className={
                        idx === 1
                          ? 'lg:mt-12'
                          : idx === 2
                          ? 'lg:-mt-8'
                          : idx === 4
                          ? 'lg:mt-16'
                          : ''
                      }
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-24 bg-gradient-to-br from-muted/30 to-white rounded-[60px] shadow-lg"
                >
                  <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-6 flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-3xl mb-4">No pieces found</h3>
                  <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
                    Try adjusting your filters to discover more designs
                  </p>
                  <Button
                    onClick={clearFilters}
                    size="lg"
                    className="rounded-full bg-primary hover:bg-primary/90 px-8 py-6 text-lg"
                  >
                    Clear Filters
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
