import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle, ChevronLeft, ChevronRight, Sparkles, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ProductCard } from '../components/ProductCard';
import { Badge } from '../components/ui/badge';
import { getProductById, getDesignerById, products } from '../data/mockData';

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  const designer = product ? getDesignerById(product.designerId) : undefined;

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product || !designer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-2">Artwork Not Found</h2>
          <Link to="/products">
            <Button className="rounded-full bg-primary hover:bg-primary/90">
              Browse Gallery
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const recommendedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleMessageToOrder = () => {
    const message = `Hi ${designer.name}! I'm interested in ordering "${product.name}" (₹${product.price.toLocaleString()})${
      selectedSize ? ` in size ${selectedSize}` : ''
    }. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Product Details - Editorial Style */}
      <section className="relative py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Image Gallery - Artistic */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Main Image */}
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative aspect-[3/4] rounded-[60px] overflow-hidden bg-muted shadow-2xl border-8 border-white"
                >
                  <img
                    src={product.images[currentImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Navigation Arrows */}
                  {product.images.length > 1 && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevImage}
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 hover:bg-white shadow-xl flex items-center justify-center transition-all"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextImage}
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 hover:bg-white shadow-xl flex items-center justify-center transition-all"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </motion.button>

                      {/* Image Indicators */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {product.images.map((_, idx) => (
                          <motion.button
                            key={idx}
                            whileHover={{ scale: 1.2 }}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`h-3 rounded-full transition-all ${
                              idx === currentImageIndex
                                ? 'bg-primary w-8'
                                : 'bg-white/50 w-3'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -bottom-8 -left-8 w-32 h-32 border-8 border-primary/30 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full opacity-20 blur-2xl"
                />
              </div>
            </motion.div>

            {/* Product Info - Editorial Layout */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Badge
                  variant="secondary"
                  className="rounded-full mb-6 px-6 py-2 text-base"
                >
                  {product.category}
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[0.95] mb-6"
              >
                {product.name}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-baseline gap-3 mb-10"
              >
                <p className="text-4xl">₹{product.price.toLocaleString()}</p>
                <span className="text-muted-foreground text-lg">INR</span>
              </motion.div>

              {/* Designer Info Card - Artistic */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Link to={`/designer/${designer.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-primary/20 to-white rounded-[40px] p-8 mb-10 hover:shadow-xl transition-shadow border border-primary/20"
                  >
                    <span className="text-sm text-muted-foreground mb-3 block">
                      Crafted by
                    </span>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
                        <img
                          src={designer.image}
                          alt={designer.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-2xl mb-1">{designer.name}</h4>
                        <p className="text-muted-foreground flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full" />
                          {designer.location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Size Selector - Artistic */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-10"
              >
                <h4 className="text-xl mb-4">Select Size</h4>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <motion.button
                      key={size}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedSize(size)}
                      className={`px-8 py-4 rounded-full border-2 transition-all text-lg ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-foreground shadow-lg'
                          : 'border-border hover:border-foreground'
                      }`}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Colors - Artistic */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mb-10"
              >
                <h4 className="text-xl mb-4">Available Colors</h4>
                <div className="flex gap-4">
                  {product.colors.map((color, idx) => (
                    <motion.div
                      key={color}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + idx * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="relative group"
                    >
                      <div
                        className="w-14 h-14 rounded-full border-4 border-white shadow-lg cursor-pointer"
                        style={{ backgroundColor: color.toLowerCase() }}
                        title={color}
                      />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {color}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Button - Prominent */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mb-10"
              >
                <Button
                  size="lg"
                  onClick={handleMessageToOrder}
                  className="w-full rounded-full bg-foreground hover:bg-foreground/90 text-background py-8 text-xl group"
                >
                  <MessageCircle className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Message to Order
                </Button>
              </motion.div>

              {/* Description - Editorial Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="bg-gradient-to-br from-muted/30 to-white rounded-[40px] p-8 border border-border/50"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h4 className="text-lg">About This Piece</h4>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      {recommendedProducts.length > 0 && (
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-muted/30 to-white">
          {/* Decorative Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-20 w-96 h-96 border-[40px] border-primary rounded-full" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-6 py-2 bg-primary rounded-full mb-6">
                Similar Pieces
              </span>
              <h2 className="text-4xl md:text-5xl tracking-tighter mb-4">
                You May Also{' '}
                <span className="italic" style={{ fontFamily: 'serif' }}>
                  Love
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                More designs from our curated collection
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {recommendedProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* More from Designer */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 to-white rounded-[60px] p-12 md:p-16 text-center shadow-xl"
          >
            <Heart className="w-16 h-16 mx-auto mb-6 text-primary fill-primary" />
            <h3 className="text-3xl md:text-4xl tracking-tighter mb-4">
              Discover More from{' '}
              <span className="block mt-2 italic" style={{ fontFamily: 'serif' }}>
                {designer.name}
              </span>
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore the complete collection and artistic vision of this talented designer
            </p>
            <Link to={`/designer/${designer.id}`}>
              <Button
                size="lg"
                className="rounded-full bg-foreground hover:bg-foreground/90 text-background px-10 py-7 text-xl"
              >
                View Artist Profile
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
