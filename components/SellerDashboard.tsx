import React, { useState } from 'react';
import { PlusCircle, Package, DollarSign, Image as ImageIcon } from 'lucide-react';
import { Product } from '../types';
import { formatCurrency, DATA } from '../constants';

interface SellerDashboardProps {
  products: Product[];
  onAddProduct: (product: Omit<Product, 'id'>) => void;
  categories: string[];
  t: typeof DATA['es']['seller'];
}

const SellerDashboard: React.FC<SellerDashboardProps> = ({ products, onAddProduct, categories, t }) => {
  // Use first category that isn't "All"
  const defaultCategory = categories.length > 1 ? categories[1] : categories[0];
  
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    stock: '',
    category: defaultCategory,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddProduct({
      name: newProduct.name,
      price: Number(newProduct.price),
      stock: Number(newProduct.stock),
      category: newProduct.category,
      image: `https://picsum.photos/400/500?random=${Math.floor(Math.random() * 1000)}`,
      rating: 0,
      reviewsCount: 0
    });
    setNewProduct({ name: '', price: '', stock: '', category: defaultCategory });
    alert(t.alertSuccess);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
        <p className="text-gray-500 mt-2">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Add Product Form */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6 sticky top-24">
            <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <PlusCircle className="w-5 h-5 mr-2 text-urbano-primary" />
              {t.newProduct}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.nameLabel}</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border-gray-200 border p-2.5 text-sm focus:border-urbano-primary focus:ring-urbano-primary"
                  placeholder={t.namePlaceholder}
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.categoryLabel}</label>
                <select
                  className="w-full rounded-lg border-gray-200 border p-2.5 text-sm focus:border-urbano-primary focus:ring-urbano-primary bg-white"
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                >
                  {categories.filter(c => c !== categories[0]).map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.priceLabel}</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <DollarSign className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    required
                    className="w-full rounded-lg border-gray-200 border p-2.5 pl-10 text-sm focus:border-urbano-primary focus:ring-urbano-primary"
                    placeholder="19990"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.stockLabel}</label>
                <input
                  type="number"
                  required
                  className="w-full rounded-lg border-gray-200 border p-2.5 text-sm focus:border-urbano-primary focus:ring-urbano-primary"
                  placeholder={t.stockPlaceholder}
                  value={newProduct.stock}
                  onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                />
              </div>

              <div className="pt-2">
                 <button
                  type="submit"
                  className="w-full bg-urbano-primary text-white rounded-xl py-3 text-sm font-medium hover:bg-[#795e54] transition-colors shadow-sm"
                >
                  {t.submit}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Inventory List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-urbano-bg/50 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900 flex items-center">
                <Package className="w-5 h-5 mr-2 text-urbano-primary" />
                {t.inventoryTitle}
              </h2>
              <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded-full border border-gray-100">
                {products.length} {t.inventoryCount}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="px-6 py-4 font-medium">{t.colProduct}</th>
                    <th className="px-6 py-4 font-medium">{t.colCategory}</th>
                    <th className="px-6 py-4 font-medium">{t.colPrice}</th>
                    <th className="px-6 py-4 font-medium">{t.colStock}</th>
                    <th className="px-6 py-4 font-medium">{t.colStatus}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                            <img src={product.image} alt="" className="h-full w-full object-cover" />
                          </div>
                          <span className="font-medium text-gray-900">{product.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-500">{product.category}</td>
                      <td className="px-6 py-4 text-gray-600">{formatCurrency(product.price)}</td>
                      <td className="px-6 py-4 text-gray-600">{product.stock} u.</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {product.stock > 0 ? t.statusActive : t.statusOut}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
