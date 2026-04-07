import React, { useState, useRef, useEffect } from 'react';
import { SlidersHorizontal, ChevronDown, Check } from 'lucide-react';
import { SortOption } from '../types';
import { DATA } from '../constants';

interface FilterBarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  sortBy: SortOption;
  onSortChange: (option: SortOption) => void;
  categories: string[];
  t: typeof DATA['es']['filter'];
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  selectedCategory, 
  onSelectCategory, 
  sortBy, 
  onSortChange,
  categories,
  t
}) => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'featured', label: t.sort.featured },
    { value: 'price-asc', label: t.sort.priceAsc },
    { value: 'price-desc', label: t.sort.priceDesc },
    { value: 'rating', label: t.sort.rating },
  ];

  const currentLabel = sortOptions.find(o => o.value === sortBy)?.label;

  return (
    <div className="sticky top-16 z-30 bg-urbano-bg/95 backdrop-blur-sm border-b border-stone-100 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Category Pills */}
          <div className="flex overflow-x-auto pb-2 sm:pb-0 scrollbar-hide gap-2 mask-linear">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                  selectedCategory === cat
                    ? 'bg-urbano-primary text-white border-urbano-primary shadow-sm'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-urbano-primary hover:text-urbano-primary'
                }`}
              >
                {cat === categories[0] ? t.allProducts : cat}
              </button>
            ))}
          </div>

          {/* Custom Sort & Filter Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-3 min-w-fit relative">
            
            {/* Custom Sort Dropdown */}
            <div className="relative" ref={sortRef}>
              <button 
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center justify-between w-full sm:w-48 px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:border-urbano-primary focus:outline-none focus:ring-2 focus:ring-urbano-secondary transition-all"
              >
                <span className="text-gray-700 truncate">{currentLabel}</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isSortOpen ? 'transform rotate-180' : ''}`} />
              </button>

              {isSortOpen && (
                <div className="absolute left-0 sm:left-auto sm:right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50 animate-fade-in origin-top-left sm:origin-top-right">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        onSortChange(option.value);
                        setIsSortOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-2.5 text-sm text-left text-gray-700 hover:bg-stone-50 hover:text-urbano-primary transition-colors"
                    >
                      <span className="flex-1">{option.label}</span>
                      {sortBy === option.value && <Check className="w-4 h-4 text-urbano-primary" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-urbano-primary transition-colors">
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
