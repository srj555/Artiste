import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Product, getDesignerById } from '../data/mockData';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const designer = getDesignerById(product.designerId);

  return (
    <Link to={`/product/${product.id}`}>
      <motion.div
        whileHover={{ y: -10, rotate: 1 }}
        className="group relative"
      >
        {/* Main Card */}
        <div className="relative bg-white rounded-[45px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
          {/* Image Container */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Designer Badge - Floating */}
            {designer && (
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="absolute top-6 right-6 z-10"
              >
                <div className="w-16 h-16 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
                  <img
                    src={designer.image}
                    alt={designer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )}

            {/* Artistic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Price Tag - Appears on Hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute bottom-6 left-6 bg-primary px-6 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <span className="text-lg">₹{product.price.toLocaleString()}</span>
            </motion.div>

            {/* Decorative Corner */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-tl-[45px]" />
          </div>

          {/* Content */}
          <div className="p-6">
            <h4 className="text-xl mb-2 line-clamp-1 group-hover:text-primary transition-colors">
              {product.name}
            </h4>
            <div className="flex items-center justify-between">
              <div>
                {designer && (
                  <p className="text-sm text-muted-foreground">by {designer.name}</p>
                )}
              </div>
              <p className="text-lg">₹{product.price.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Floating Decorative Element */}
        <motion.div
          className="absolute -bottom-3 -right-3 w-12 h-12 border-4 border-primary rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.2, rotate: 180 }}
        />
      </motion.div>
    </Link>
  );
}
