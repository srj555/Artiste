import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Designer } from '../data/mockData';
import { Instagram, Sparkles } from 'lucide-react';

interface DesignerCardProps {
  designer: Designer;
}

export function DesignerCard({ designer }: DesignerCardProps) {
  return (
    <Link to={`/designer/${designer.id}`}>
      <motion.div
        whileHover={{ y: -12, rotate: 2 }}
        className="group relative"
      >
        {/* Main Card */}
        <div className="relative bg-white rounded-[50px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
          {/* Image with Artistic Overlay */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={designer.image}
              alt={designer.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            
            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 w-20 h-20 border-4 border-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-3xl mb-2 group-hover:text-primary transition-colors">
                  {designer.name}
                </h3>
                <p className="text-white/90 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {designer.location}
                </p>
                <p className="text-sm text-white/80 line-clamp-2 mb-4">
                  {designer.bio}
                </p>

                {/* Instagram Handle */}
                <a
                  href={`https://instagram.com/${designer.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors text-sm"
                >
                  <Instagram className="w-4 h-4" />
                  <span>{designer.instagram}</span>
                </a>
              </motion.div>
            </div>

            {/* Categories - Artistic Pills */}
            <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
              {designer.category.slice(0, 2).map((cat, idx) => (
                <motion.span
                  key={cat}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm shadow-lg"
                >
                  {cat}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Badge - Artistic */}
        {designer.featured && (
          <motion.div
            whileHover={{ scale: 1.15, rotate: 10 }}
            className="absolute -top-4 -right-4 bg-primary px-6 py-3 rounded-full shadow-xl z-20 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Featured</span>
          </motion.div>
        )}

        {/* Decorative Corner Elements */}
        <div className="absolute -bottom-3 -left-3 w-16 h-16 border-4 border-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-white" />
      </motion.div>
    </Link>
  );
}
