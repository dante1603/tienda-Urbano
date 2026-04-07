import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { DATA } from './constants';
import { Product, CartItem, ViewMode, SortOption, Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductCarousel from './components/ProductCarousel';
import FilterBar from './components/FilterBar';
import CartDrawer from './components/CartDrawer';
import SellerDashboard from './components/SellerDashboard';
import ProfileDrawer from './components/ProfileDrawer';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('es');
  
  // Get current translations based on language
  const t = DATA[language];

  const [products, setProducts] = useState<Product[]>(t.products);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('buyer');
  
  // Filtering & Sorting State
  const [selectedCategory, setSelectedCategory] = useState<string>(t.categories[0]);
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  // Update products and categories when language changes
  useEffect(() => {
    setProducts(DATA[language].products);
    setSelectedCategory(DATA[language].categories[0]);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  // -- Cart Logic --
  const addToCart = useCallback((product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  }, []);

  // -- Seller Logic --
  const handleAddProduct = useCallback((newProductData: Omit<Product, 'id'>) => {
    const productWithId: Product = {
      ...newProductData,
      id: Date.now().toString(),
    };
    setProducts(prev => [productWithId, ...prev]);
  }, []);

  // -- Filter & Sort Logic --
  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by Category
    if (selectedCategory !== t.categories[0]) {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Sort
    return [...result].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        default: return 0; // featured (default order)
      }
    });
  }, [products, selectedCategory, sortBy, t.categories]);

  // Grouping for "All" view (Carousels)
  const productsByCategory = useMemo(() => {
    const groups: Record<string, Product[]> = {};
    t.categories.filter(c => c !== t.categories[0]).forEach(cat => {
      groups[cat] = products.filter(p => p.category === cat);
    });
    return groups;
  }, [products, t.categories]);

  const totalItemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-urbano-bg flex flex-col font-sans">
      <Navbar 
        cartItemCount={totalItemsInCart} 
        onCartClick={() => setIsCartOpen(true)} 
        viewMode={viewMode}
        onToggleMode={() => setViewMode(prev => prev === 'buyer' ? 'seller' : 'buyer')}
        onProfileClick={() => setIsProfileOpen(true)}
        language={language}
        onToggleLanguage={toggleLanguage}
        t={t.nav}
      />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        t={t.cart}
      />

      <ProfileDrawer 
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        t={t.profile}
      />

      <main className="flex-grow">
        {viewMode === 'buyer' ? (
          <>
            <Hero t={t.hero} />
            
            <FilterBar 
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              sortBy={sortBy}
              onSortChange={setSortBy}
              categories={t.categories}
              t={t.filter}
            />

            <div id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[500px]">
              
              {/* Dynamic View: Carousels if "All" is selected, Grid if filtered */}
              {selectedCategory === t.categories[0] && sortBy === 'featured' ? (
                /* Thematic Carousels View */
                <div className="space-y-4">
                  <div className="mb-4">
                     <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">{t.ui.explore}</h2>
                     <p className="text-gray-500 text-sm">{t.ui.exploreSubtitle}</p>
                  </div>
                  
                  {/* Featured / Best Sellers (Simulated) */}
                   <ProductCarousel 
                    title={t.ui.trends} 
                    products={products.filter(p => p.rating > 4.6).slice(0, 6)} 
                    onAddToCart={addToCart} 
                    t={t.ui}
                  />

                  {Object.entries(productsByCategory).map(([category, items]) => (
                    (items as Product[]).length > 0 && (
                      <ProductCarousel 
                        key={category} 
                        title={category} 
                        products={items as Product[]} 
                        onAddToCart={addToCart} 
                        t={t.ui}
                      />
                    )
                  ))}
                </div>
              ) : (
                /* Grid View for specific filters */
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">
                      {selectedCategory === t.categories[0] ? t.filter.allProducts : selectedCategory}
                    </h2>
                    <span className="text-sm text-gray-500">{filteredProducts.length} {t.ui.results}</span>
                  </div>
                  
                  {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 animate-fade-in">
                      {filteredProducts.map(product => (
                        <ProductCard 
                          key={product.id} 
                          product={product} 
                          onAddToCart={addToCart} 
                          t={t.ui}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-20">
                      <p className="text-gray-500">{t.ui.noResults}</p>
                      <button 
                        onClick={() => setSelectedCategory(t.categories[0])}
                        className="mt-4 text-urbano-primary font-medium hover:underline"
                      >
                        {t.ui.viewCatalog}
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </>
        ) : (
          <SellerDashboard 
            products={products} 
            onAddProduct={handleAddProduct} 
            categories={t.categories}
            t={t.seller}
          />
        )}
      </main>

      <footer className="bg-white border-t border-stone-100 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <span className="font-serif text-lg font-bold text-urbano-primary">Tienda Urbano</span>
              <p className="text-sm text-gray-400 mt-1">Moda consciente, segura y para ti.</p>
            </div>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-urbano-primary">Privacidad</a>
              <a href="#" className="hover:text-urbano-primary">Términos</a>
              <a href="#" className="hover:text-urbano-primary">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
