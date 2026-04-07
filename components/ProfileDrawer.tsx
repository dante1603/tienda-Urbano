import React from 'react';
import { X, Package, Heart, Settings, LogOut, MapPin, CreditCard, ChevronRight } from 'lucide-react';
import { DATA } from '../constants';

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  t: typeof DATA['es']['profile'];
}

const ProfileDrawer: React.FC<ProfileDrawerProps> = ({ isOpen, onClose, t }) => {
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
            <div className="flex h-full flex-col bg-urbano-bg shadow-xl overflow-y-auto">
              
              {/* Profile Header */}
              <div className="bg-white px-4 py-6 sm:px-6 border-b border-stone-100">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-gray-900">{t.title}</h2>
                  <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="mt-6 flex items-center">
                  <div className="h-16 w-16 rounded-full bg-urbano-secondary flex items-center justify-center text-urbano-primary text-xl font-bold border-2 border-white shadow-sm">
                    VU
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Valentina Urbano</h3>
                    <p className="text-sm text-gray-500">valentina@ejemplo.com</p>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 mt-1">
                      {t.member}
                    </span>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="flex-1 py-6 px-4 sm:px-6 space-y-6">
                
                {/* Orders Section */}
                <section>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{t.orders}</h4>
                  <div className="bg-white rounded-xl border border-stone-100 overflow-hidden">
                    <div className="p-4 border-b border-stone-50 hover:bg-stone-50 transition-colors cursor-pointer group">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">Pedido #29381</span>
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{t.delivered}</span>
                      </div>
                      <p className="text-xs text-gray-500">Hace 2 días • 3 Artículos</p>
                      <div className="flex items-center mt-2 text-xs text-urbano-primary group-hover:underline">
                        Ver detalles <ChevronRight className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                    <div className="p-4 hover:bg-stone-50 transition-colors cursor-pointer group">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">Pedido #29340</span>
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{t.onWay}</span>
                      </div>
                      <p className="text-xs text-gray-500">Llega mañana • 1 Artículo</p>
                    </div>
                  </div>
                </section>

                {/* Account Settings */}
                <section>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{t.account}</h4>
                  <div className="bg-white rounded-xl border border-stone-100 overflow-hidden divide-y divide-stone-50">
                    <button className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-stone-50 transition-colors">
                      <Heart className="w-4 h-4 mr-3 text-gray-400" />
                      {t.wishlist}
                    </button>
                    <button className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-stone-50 transition-colors">
                      <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                      {t.addresses}
                    </button>
                    <button className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-stone-50 transition-colors">
                      <CreditCard className="w-4 h-4 mr-3 text-gray-400" />
                      {t.payments}
                    </button>
                    <button className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-stone-50 transition-colors">
                      <Settings className="w-4 h-4 mr-3 text-gray-400" />
                      {t.settings}
                    </button>
                  </div>
                </section>

              </div>

              {/* Footer */}
              <div className="p-4 border-t border-stone-100 bg-white">
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  <LogOut className="w-4 h-4 mr-2" />
                  {t.logout}
                </button>
                <p className="text-center text-xs text-gray-400 mt-4">Version 1.0.0 (Prototipo)</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDrawer;
