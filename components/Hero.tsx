import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DATA } from '../constants';

interface HeroProps {
  t: typeof DATA['es']['hero'];
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const scrollToCatalog = (e: React.MouseEvent) => {
    e.preventDefault();
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-white overflow-hidden mb-8 rounded-b-3xl shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 rounded-b-3xl">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-urbano-bg text-urbano-primary text-xs font-semibold tracking-wide uppercase mb-3 border border-stone-200">
                {t.badge}
              </span>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">{t.titleStart}</span>{' '}
                <span className="block text-urbano-accent xl:inline">{t.titleEnd}</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto">
                {t.subtitle}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button
                    onClick={scrollToCatalog}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-urbano-primary hover:bg-[#795e54] md:py-4 md:text-lg transition-all"
                  >
                    {t.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
          alt="Woman smiling with elegant casual clothes"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent lg:via-white/20"></div>
      </div>
    </div>
  );
};

export default Hero;
