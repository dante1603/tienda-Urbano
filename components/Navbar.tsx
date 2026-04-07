import React, { useState } from 'react';
import { Search, ShoppingBag, User, Store as StoreIcon, Store, Globe } from 'lucide-react';
import { ViewMode, Language } from '../types';
import { DATA } from '../constants';

interface NavbarProps {
  cartItemCount: number;
  onCartClick: () => void;
  viewMode: ViewMode;
  onToggleMode: () => void;
  onProfileClick: () => void;
  language: Language;
  onToggleLanguage: () => void;
  t: typeof DATA['es']['nav'];
}

const Navbar: React.FC<NavbarProps> = ({ 
  cartItemCount, 
  onCartClick, 
  viewMode, 
  onToggleMode,
  onProfileClick,
  language,
  onToggleLanguage,
  t
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-stone-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Area */}
          <div className="flex items-center cursor-pointer">
            <div className="bg-urbano-accent/20 p-2 rounded-full mr-2">
              <StoreIcon className="h-6 w-6 text-urbano-primary" />
            </div>
            <span className="font-serif text-xl font-bold text-urbano-primary tracking-tight">
              Tienda Urbano
            </span>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className={`relative w-full transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full leading-5 bg-urbano-bg placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-urbano-accent focus:border-urbano-accent sm:text-sm transition-colors"
                placeholder={t.searchPlaceholder}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Language Toggle */}
            <button 
              onClick={onToggleLanguage}
              className="p-2 rounded-full hover:bg-stone-100 text-urbano-text transition-colors flex items-center"
              title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <Globe className="h-5 w-5 mr-1" />
              <span className="text-xs font-semibold uppercase">{language}</span>
            </button>

            <button
              onClick={onToggleMode}
              className={`hidden sm:flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                viewMode === 'seller' 
                  ? 'bg-urbano-primary text-white' 
                  : 'bg-stone-100 text-urbano-text hover:bg-stone-200'
              }`}
            >
              <Store className="h-3.5 w-3.5 mr-1.5" />
              {viewMode === 'seller' ? t.sellerActive : t.sellerMode}
            </button>

            <div className="flex items-center space-x-2 sm:space-x-4 text-gray-500">
              <button 
                onClick={onProfileClick}
                className="p-2 rounded-full hover:bg-stone-100 transition-colors"
              >
                <User className="h-5 w-5" />
              </button>
              
              <button 
                onClick={onCartClick}
                className="p-2 rounded-full hover:bg-stone-100 transition-colors relative group"
              >
                <ShoppingBag className="h-5 w-5 group-hover:text-urbano-primary transition-colors" />
                {cartItemCount > 0 && (
                  <span className="absolute top-1 right-0.5 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-urbano-accent rounded-full shadow-sm">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Mode Toggle (Visible only on small screens) */}
      <div className="sm:hidden border-t border-gray-100 px-4 py-2 bg-urbano-bg flex justify-center">
        <button
          onClick={onToggleMode}
          className="text-xs font-medium text-urbano-primary flex items-center"
        >
          {viewMode === 'seller' ? t.buyerMode : t.sellerMode}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
