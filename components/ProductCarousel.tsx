import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import ProductCard from './ProductCard';
import { DATA } from '../constants';

interface ProductCarouselProps {
  title: string;
  products: Product[];
  onAddToCart: (product: Product) => void;
  t: typeof DATA['es']['ui'];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, products, onAddToCart, t }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Aproximadamente el ancho de una tarjeta + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (products.length === 0) return null;

  return (
    <div className="py-8 border-b border-stone-50 last:border-0">
      <div className="flex justify-between items-center mb-6 px-1">
        <h3 className="text-xl font-bold text-gray-900 tracking-tight font-serif">{title}</h3>
        <div className="flex space-x-2">
          <button 
            onClick={() => scroll('left')}
            className="p-2 rounded-full border border-gray-200 hover:bg-urbano-primary hover:text-white hover:border-transparent transition-colors hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2 rounded-full border border-gray-200 hover:bg-urbano-primary hover:text-white hover:border-transparent transition-colors hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div key={product.id} className="snap-start flex-shrink-0 w-[280px]">
            <ProductCard product={product} onAddToCart={onAddToCart} t={t} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
