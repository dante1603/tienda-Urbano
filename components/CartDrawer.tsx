import React from 'react';
import { X, ShieldCheck, FileText, Trash2, Minus, Plus, Lock } from 'lucide-react';
import { CartItem } from '../types';
import { formatCurrency, DATA } from '../constants';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  t: typeof DATA['es']['cart'];
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  cart, 
  onUpdateQuantity, 
  onRemoveItem,
  t
}) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 overflow-hidden z-50">
      <div className="absolute inset-0 overflow-hidden">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm" 
          onClick={onClose}
        />

        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="pointer-events-auto w-screen max-w-md transform transition-transform duration-300 ease-in-out">
            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              
              {/* Header */}
              <div className="flex items-start justify-between px-4 py-6 sm:px-6 border-b border-gray-100">
                <h2 className="text-lg font-medium text-gray-900">{t.title}</h2>
                <button
                  type="button"
                  className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                  onClick={onClose}
                >
                  <span className="sr-only">Close panel</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 bg-urbano-bg/30">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-4">
                    <ShoppingBagIcon className="h-16 w-16 text-gray-300" />
                    <p>{t.empty}</p>
                    <button onClick={onClose} className="text-urbano-primary font-medium hover:underline">
                      {t.keepShopping}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {cart.map((item) => (
                      <li key={item.id} className="flex py-2">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>{item.name}</h3>
                              <p className="ml-4">{formatCurrency(item.price)}</p>
                            </div>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="flex items-center border border-gray-300 rounded-lg">
                              <button 
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                className="p-1 hover:bg-gray-100 rounded-l-lg"
                              >
                                <Minus className="h-3 w-3 text-gray-500" />
                              </button>
                              <span className="px-2 text-gray-600">{item.quantity}</span>
                              <button 
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="p-1 hover:bg-gray-100 rounded-r-lg"
                              >
                                <Plus className="h-3 w-3 text-gray-500" />
                              </button>
                            </div>

                            <button
                              type="button"
                              onClick={() => onRemoveItem(item.id)}
                              className="font-medium text-red-400 hover:text-red-500 flex items-center"
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              {t.remove}
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer / Checkout Info */}
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6 bg-white">
                {/* Trust Elements */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center justify-center p-2 bg-green-50 rounded-lg">
                    <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-xs font-medium text-green-800">{t.secure}</span>
                  </div>
                  <div className="flex items-center justify-center p-2 bg-blue-50 rounded-lg">
                    <FileText className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-xs font-medium text-blue-800">{t.receipt}</span>
                  </div>
                </div>

                <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                  <p>{t.total}</p>
                  <p className="text-xl">{formatCurrency(total)}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500 mb-6">
                  {t.taxes}
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-xl border border-transparent bg-urbano-primary px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-[#795e54] transition-colors"
                  >
                    <Lock className="w-4 h-4 mr-2" />
                    {t.checkout}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShoppingBagIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

export default CartDrawer;
