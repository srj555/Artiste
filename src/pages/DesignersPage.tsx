import { useState } from 'react';
import { motion } from 'motion/react';
import { DesignerCard } from '../components/DesignerCard';
import { designers } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Filter, Sparkles, X } from 'lucide-react';
import { Badge } from '../components/ui/badge';

export function DesignersPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const categories = ['Ethnic', 'Western', 'Fusion', 'Bridal', 'Casual', 'Kurti', 'Lehenga'];
  const locations = [...new Set(designers.map((d) => d.location))];

  const filteredDesigners = designers.filter((designer) => {
    if (selectedCategory && !designer.category.includes(selectedCategory)) {
      return false;
    }
    if (selectedLocation && designer.location !== selectedLocation) {
      return false;
    }
    return true;
  });

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedLocation(null);
  };

  const hasActiveFilters = selectedCategory || selectedLocation;

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Artistic Hero */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary/20 via-white to-muted/30 overflow-hidden">
        {/* Decorative Elements */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-20 w-64 h-64 border-[30px] border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 left-10 w-96 h-96 border-[40px] border-primary/5 rounded-full"
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
              <span>The Artists</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] mb-8">
              <span className="block">Meet the</span>
              <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground" style={{ fontFamily: 'serif' }}>
                Creative Minds
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each artist brings a unique vision to fashion. Connect with talented boutique designers from across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Results */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Artistic Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-muted/50 to-white rounded-[50px] p-8 md:p-10 mb-12 shadow-lg border border-border/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Filter className="w-5 h-5" />
              </div>
              <h3 className="text-2xl">Filter Artists</h3>
            </div>

            <div className="space-y-8">
              {/* Category Filter */}
              <div>
                <p className="mb-4 text-lg text-muted-foreground">By Specialty</p>
                <div className="flex flex-wrap gap-3">
                  {categories.map((cat) => (
                    <motion.div
                      key={cat}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant={selectedCategory === cat ? 'default' : 'outline'}
                        className={`cursor-pointer rounded-full px-6 py-3 text-base transition-all ${
                          selectedCategory === cat
                            ? 'bg-primary text-foreground shadow-lg'
                            : 'hover:border-primary'
                        }`}
                        onClick={() =>
                          setSelectedCategory(selectedCategory === cat ? null : cat)
                        }
                      >
                        {cat}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <p className="mb-4 text-lg text-muted-foreground">By Location</p>
                <div className="flex flex-wrap gap-3">
                  {locations.map((loc) => (
                    <motion.div
                      key={loc}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant={selectedLocation === loc ? 'default' : 'outline'}
                        className={`cursor-pointer rounded-full px-6 py-3 text-base transition-all ${
                          selectedLocation === loc
                            ? 'bg-primary text-foreground shadow-lg'
                            : 'hover:border-primary'
                        }`}
                        onClick={() =>
                          setSelectedLocation(selectedLocation === loc ? null : loc)
                        }
                      >
                        {loc}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-4"
                >
                  <Button
                    variant="ghost"
                    onClick={clearFilters}
                    className="rounded-full text-base group"
                  >
                    <X className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform" />
                    Clear all filters
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Results Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-10 flex items-center justify-between"
          >
            <div>
              <p className="text-xl text-muted-foreground">
                Showing{' '}
                <span className="text-foreground font-medium">
                  {filteredDesigners.length}
                </span>{' '}
                talented artist{filteredDesigners.length !== 1 ? 's' : ''}
              </p>
            </div>
          </motion.div>

          {/* Designer Grid - Artistic Layout */}
          {filteredDesigners.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filteredDesigners.map((designer, idx) => (
                <motion.div
                  key={designer.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
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
                  <DesignerCard designer={designer} />
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
              <h3 className="text-3xl mb-4">No artists found</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
                Try adjusting your filters to discover more talented designers
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
      </section>
    </div>
  );
}
