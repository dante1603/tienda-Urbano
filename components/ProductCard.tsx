import React from 'react';
import { Star, ShoppingCart, CheckCircle } from 'lucide-react';
import { Product } from '../types';
import { formatCurrency, DATA } from '../constants';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  t: typeof DATA['es']['ui'];
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, t }) => {
  // Helper to render stars
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-3.5 w-3.5 ${
              i < Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 flex flex-col overflow-hidden">
      {/* Image Container */}
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-95 group-hover:scale-105 transition-transform duration-500"
        />
        {/* Trust Badge Overlay */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center shadow-sm">
          <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
          <span className="text-[10px] font-medium text-gray-600 uppercase tracking-wider">{t.verified}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-1">
             <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{product.name}</h3>
          </div>
          
          {/* Rating Section - Crucial for trust */}
          <div className="flex items-center mb-3 space-x-2">
            {renderStars(product.rating)}
            <span className="text-xs text-gray-500 font-light">({product.reviewsCount})</span>
          </div>

          <p className="text-lg font-semibold text-urbano-primary">
            {formatCurrency(product.price)}
          </p>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="mt-4 w-full flex items-center justify-center rounded-xl bg-urbano-bg border border-urbano-secondary py-2.5 text-sm font-medium text-urbano-text hover:bg-urbano-accent hover:text-white hover:border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-urbano-accent"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {t.addToCart}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
