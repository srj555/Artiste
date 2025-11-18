import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Instagram, MessageCircle, MapPin, Star, Sparkles, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { getDesignerById, getProductsByDesigner } from '../data/mockData';

export function DesignerDetailPage() {
  const { id } = useParams<{ id: string }>();
  const designer = id ? getDesignerById(id) : undefined;
  const products = id ? getProductsByDesigner(id) : [];

  if (!designer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-2">Designer Not Found</h2>
          <Link to="/designers">
            <Button className="rounded-full bg-primary hover:bg-primary/90">
              Browse Designers
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleMessageDesigner = () => {
    const message = `Hi! I'm interested in your designs. I'd love to know more about your collections.`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Artistic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0">
          {/* Gradient Blobs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary rounded-full blur-3xl"
          />
          
          {/* Geometric Shapes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/4 left-1/4 w-32 h-32 border-8 border-primary/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-1/4 right-1/4 w-48 h-48 border-[12px] border-primary/10"
            style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Designer Image - Artistic Layout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1 }}
              className="relative order-2 lg:order-1"
            >
              {/* Main Image Container */}
              <div className="relative">
                {/* Decorative Frame */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -inset-6 bg-primary rounded-[60px] opacity-20"
                />
                
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 2 }}
                  className="relative aspect-[3/4] rounded-[60px] overflow-hidden shadow-2xl border-8 border-white"
                >
                  <img
                    src={designer.image}
                    alt={designer.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Artistic Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                </motion.div>

                {/* Floating Decorative Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-8 -right-8 w-24 h-24 bg-primary rounded-full shadow-xl flex items-center justify-center"
                >
                  <Star className="w-12 h-12 text-foreground fill-foreground" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-6 -left-6 w-32 h-32 border-8 border-primary rounded-full"
                />
              </div>
            </motion.div>

            {/* Designer Info - Editorial Style */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-1 lg:order-2"
            >
              {/* Location Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg mb-8 border border-border"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">{designer.location}</span>
              </motion.div>

              {/* Name - Large Typography */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-6xl sm:text-7xl md:text-8xl tracking-tighter leading-[0.9] mb-6"
              >
                {designer.name.split(' ').map((word, idx) => (
                  <span key={idx} className="block">
                    {word}
                  </span>
                ))}
              </motion.h1>

              {/* Instagram Handle */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                href={`https://instagram.com/${designer.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xl text-muted-foreground hover:text-primary transition-colors mb-8 group"
              >
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>{designer.instagram}</span>
              </motion.a>

              {/* Bio - Large Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-2xl text-muted-foreground leading-relaxed mb-8"
              >
                {designer.bio}
              </motion.p>

              {/* Category Tags - Artistic */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-3 mb-12"
              >
                {designer.category.map((cat, idx) => (
                  <motion.span
                    key={cat}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + idx * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    className="px-6 py-3 bg-primary rounded-full text-lg shadow-md"
                  >
                    {cat}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <Button
                  size="lg"
                  onClick={handleMessageDesigner}
                  className="rounded-full bg-foreground hover:bg-foreground/90 text-background px-10 py-7 text-xl group"
                >
                  <MessageCircle className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Connect with Artist
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collections Section - Gallery Style */}
      <section className="relative py-32 bg-gradient-to-b from-white to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary rounded-full mb-8"
            >
              <Sparkles className="w-5 h-5" />
              <span>The Collection</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl tracking-tighter mb-6">
              Curated by{' '}
              <span className="italic block mt-2" style={{ fontFamily: 'serif' }}>
                {designer.name}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the exclusive artistic vision brought to life
            </p>
          </motion.div>

          {/* Products Grid - Artistic Layout */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50, rotate: -5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className={
                    idx === 1
                      ? 'lg:mt-16'
                      : idx === 2
                      ? 'lg:-mt-8'
                      : idx === 4
                      ? 'lg:mt-12'
                      : ''
                  }
                >
                  <Link to={`/product/${product.id}`}>
                    <motion.div
                      whileHover={{ scale: 1.03, rotate: 2 }}
                      className="group relative"
                    >
                      {/* Product Card with Artistic Shadow */}
                      <div className="relative rounded-[50px] overflow-hidden shadow-xl hover:shadow-2xl transition-all bg-white">
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          
                          {/* Artistic Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          {/* Floating Price Tag */}
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="absolute top-6 right-6 bg-primary px-6 py-3 rounded-full shadow-lg"
                          >
                            <span className="text-lg">₹{product.price.toLocaleString()}</span>
                          </motion.div>
                        </div>

                        {/* Product Info */}
                        <div className="p-8">
                          <h4 className="text-2xl mb-2 line-clamp-2">{product.name}</h4>
                          <p className="text-muted-foreground">{product.category}</p>
                        </div>
                      </div>

                      {/* Decorative Corner Element */}
                      <div className="absolute -bottom-3 -right-3 w-16 h-16 border-4 border-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center py-20 bg-white rounded-[60px] shadow-xl"
            >
              <Heart className="w-20 h-20 mx-auto mb-6 text-primary" />
              <h3 className="text-3xl mb-4">More Creations Coming Soon</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
                This artist is crafting new masterpieces. Connect with them directly.
              </p>
              <Button
                onClick={handleMessageDesigner}
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 px-8 py-6 text-lg"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Contact Artist
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Artist Statement Section */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-20 right-20 w-96 h-96 border-[50px] border-primary rounded-full"
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 to-white rounded-[60px] p-12 md:p-16 shadow-2xl border border-primary/20"
          >
            <span className="inline-block px-6 py-2 bg-primary rounded-full mb-8 text-sm">
              Artist Statement
            </span>
            
            <h3 className="text-4xl md:text-5xl tracking-tighter mb-8">
              About the Artist
            </h3>
            
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <p>
                {designer.bio} Based in <strong className="text-foreground">{designer.location}</strong>, 
                this designer has carved a unique space in the fashion world by specializing in{' '}
                <strong className="text-foreground">{designer.category.join(', ')}</strong>.
              </p>
              
              <p>
                Each piece is a testament to the fusion of traditional craftsmanship with contemporary 
                design thinking. The work celebrates individuality, artistry, and the beauty of 
                handcrafted fashion in an age of mass production.
              </p>
              
              <p>
                To place an order or inquire about custom designs, connect directly through the button above. 
                Every piece can be personalized to reflect your unique style and vision.
              </p>
            </div>

            {/* Decorative Quote Mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-10 text-[200px] leading-none text-primary"
              style={{ fontFamily: 'serif' }}
            >
              "
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action - Artistic */}
      <section className="relative py-32 bg-gradient-to-b from-muted/30 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Star className="w-20 h-20 mx-auto mb-8 text-primary fill-primary" />
            <h3 className="text-5xl md:text-6xl tracking-tighter mb-8">
              Ready to Own <br />
              <span className="italic" style={{ fontFamily: 'serif' }}>
                Wearable Art?
              </span>
            </h3>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Connect with {designer.name} to discuss custom pieces, place orders, 
              and bring your fashion vision to life.
            </p>
            <Button
              onClick={handleMessageDesigner}
              size="lg"
              className="rounded-full bg-foreground hover:bg-foreground/90 text-background px-12 py-8 text-xl"
            >
              <MessageCircle className="mr-3 w-6 h-6" />
              Start the Conversation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
