import { motion } from 'framer-motion';
import { Heart, ShoppingCart, MapPin, Package } from 'lucide-react';
import { useCartStore, useWishlistStore } from '../store/useStore';
import clsx from 'clsx';

const ProductCard = ({ product, index = 0 }) => {
  const { addItem } = useCartStore();
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    toggleWishlist(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 flex items-center justify-center overflow-hidden">
        {/* Emoji/Image */}
        <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
          {product.emoji}
        </div>

        {/* Badge */}
        {product.badge && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-3 left-3 px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full shadow-lg"
          >
            {product.badge}
          </motion.div>
        )}

        {/* Wishlist Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleToggleWishlist}
          className={clsx(
            'absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all',
            inWishlist
              ? 'bg-red-500 text-white shadow-lg'
              : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
          )}
        >
          <Heart size={18} fill={inWishlist ? 'currentColor' : 'none'} />
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
              {product.nameNepali}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {product.nameEnglish}
            </p>
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            ⭐
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {product.rating}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-4 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{product.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Package size={14} />
            <span>{product.quantity} kg</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              रू {product.price}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">per kg</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="px-4 py-2 bg-gradient-primary text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            <ShoppingCart size={16} />
            <span>Add</span>
          </motion.button>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent" />
      </div>
    </motion.div>
  );
};

export default ProductCard;
