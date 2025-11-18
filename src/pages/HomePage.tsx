import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Heart, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { designers, products } from '../data/mockData';

export function HomePage() {
  const featuredDesigners = designers.filter((d) => d.featured);
  const trendingProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Artistic Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-primary blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 0.05, rotate: 45 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute bottom-20 right-1/4 w-96 h-96 border-[40px] border-primary rounded-full"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Content - Asymmetric */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block mb-6"
              >
                <div className="flex items-center gap-2 px-6 py-3 bg-primary rounded-full">
                  <Sparkles className="w-5 h-5" />
                  <span>Discover Unique Fashion</span>
                </div>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 tracking-tighter leading-[0.9]">
                <span className="block">Where</span>
                <span className="block italic" style={{ fontFamily: 'serif' }}>
                  Art
                </span>
                <span className="block">Meets</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">
                  Fashion
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                A curated gallery of India's most talented Instagram designers. Every piece is a masterpiece.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/designers">
                  <Button
                    size="lg"
                    className="rounded-full w-full sm:w-auto bg-primary hover:bg-primary/90 text-foreground px-8 py-6 text-lg"
                  >
                    Explore Artists
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full w-full sm:w-auto px-8 py-6 text-lg border-2"
                  >
                    View Gallery
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Artistic Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5 relative hidden lg:block"
            >
              <div className="relative h-[600px]">
                {/* Main Image */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="absolute top-0 right-0 w-72 h-96 rounded-[40px] overflow-hidden shadow-2xl z-10 border-8 border-white"
                >
                  <img
                    src={featuredDesigners[0]?.image}
                    alt="Featured"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Secondary Image */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  className="absolute bottom-20 left-0 w-64 h-80 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white"
                >
                  <img
                    src={trendingProducts[0]?.images[0]}
                    alt="Featured"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute top-1/3 left-1/4 w-20 h-20 border-4 border-primary rounded-full"
                />
                <Star className="absolute bottom-40 right-20 w-12 h-12 text-primary fill-primary opacity-50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Designers - Artistic Grid */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-white to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-6 py-2 bg-primary rounded-full mb-6">
              The Artists
            </span>
            <h2 className="text-5xl md:text-6xl tracking-tighter mb-6">
              Meet the Creative Minds
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each designer brings their unique artistic vision to life
            </p>
          </motion.div>

          {/* Asymmetric Designer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDesigners.map((designer, idx) => (
              <motion.div
                key={designer.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <Link to={`/designer/${designer.id}`}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className={`group relative ${
                      idx === 1 ? 'lg:mt-16' : idx === 2 ? 'lg:-mt-8' : ''
                    }`}
                  >
                    {/* Artistic Card */}
                    <div className="relative bg-white rounded-[50px] overflow-hidden shadow-xl">
                      {/* Image with Overlay */}
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <img
                          src={designer.image}
                          alt={designer.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Artistic Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        
                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                          <h3 className="text-2xl mb-2">{designer.name}</h3>
                          <p className="text-white/80 mb-3">{designer.location}</p>
                          <p className="text-sm text-white/70 line-clamp-2">{designer.bio}</p>
                        </div>

                        {/* Decorative Corner */}
                        <div className="absolute top-6 right-6 w-16 h-16 border-4 border-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>

                    {/* Floating Badge */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="absolute -top-4 -right-4 bg-primary px-6 py-3 rounded-full shadow-lg"
                    >
                      <span className="text-sm">Featured</span>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/designers">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-lg border-2 hover:bg-primary hover:text-foreground hover:border-primary"
              >
                View All Artists
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trending Products - Magazine Style */}
      <section className="relative py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-end justify-between flex-wrap gap-6">
              <div>
                <span className="inline-block px-6 py-2 bg-primary rounded-full mb-6">
                  The Collection
                </span>
                <h2 className="text-5xl md:text-6xl tracking-tighter mb-4">
                  Trending Masterpieces
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Hand-picked designs that are making waves
                </p>
              </div>
              <Link to="/products" className="hidden md:block">
                <Button
                  variant="ghost"
                  size="lg"
                  className="rounded-full text-lg group"
                >
                  Explore All
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingProducts.map((product, idx) => {
              const designer = designers.find((d) => d.id === product.designerId);
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={idx === 1 ? 'lg:mt-12' : idx === 2 ? 'lg:-mt-8' : ''}
                >
                  <Link to={`/product/${product.id}`}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="group relative"
                    >
                      {/* Product Card */}
                      <div className="relative bg-muted/30 rounded-[45px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          
                          {/* Designer Badge */}
                          {designer && (
                            <div className="absolute top-6 right-6 w-14 h-14 rounded-full border-4 border-white shadow-lg overflow-hidden">
                              <img
                                src={designer.image}
                                alt={designer.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500" />
                        </div>

                        {/* Product Info */}
                        <div className="p-6">
                          <h4 className="text-xl mb-2 line-clamp-1">{product.name}</h4>
                          <div className="flex items-center justify-between">
                            <p className="text-lg">₹{product.price.toLocaleString()}</p>
                            {designer && (
                              <p className="text-sm text-muted-foreground">by {designer.name}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="md:hidden text-center mt-12">
            <Link to="/products">
              <Button variant="outline" className="rounded-full px-8 py-6">
                View All Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Artistic Values Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-muted/30 to-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 border-[30px] border-primary rounded-full" />
          <div className="absolute bottom-20 right-10 w-96 h-96 border-[40px] border-primary rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl tracking-tighter mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're not just a marketplace—we're an art gallery for fashion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Heart,
                title: 'Curated by Passion',
                desc: 'Every designer is handpicked for their unique artistic vision and craftsmanship',
              },
              {
                icon: Sparkles,
                title: 'One-of-a-Kind Pieces',
                desc: 'Exclusive designs you won\'t find in mainstream stores—true wearable art',
              },
              {
                icon: Star,
                title: 'Direct from Artists',
                desc: 'Connect directly with designers, customize your pieces, and support their craft',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary mb-6 shadow-lg"
                >
                  <item.icon className="w-10 h-10" />
                </motion.div>
                <h3 className="text-2xl mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
