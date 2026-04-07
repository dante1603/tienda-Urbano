import { Product, Language } from './types';

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  }).format(value);
};

interface TranslationData {
  nav: {
    searchPlaceholder: string;
    sellerMode: string;
    buyerMode: string;
    sellerActive: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleEnd: string;
    subtitle: string;
    cta: string;
  };
  ui: {
    addToCart: string;
    verified: string;
    reviews: string;
    results: string;
    noResults: string;
    viewCatalog: string;
    explore: string;
    exploreSubtitle: string;
    trends: string;
  };
  cart: {
    title: string;
    empty: string;
    keepShopping: string;
    remove: string;
    secure: string;
    receipt: string;
    total: string;
    taxes: string;
    checkout: string;
  };
  seller: {
    title: string;
    subtitle: string;
    newProduct: string;
    nameLabel: string;
    namePlaceholder: string;
    categoryLabel: string;
    priceLabel: string;
    stockLabel: string;
    stockPlaceholder: string;
    submit: string;
    inventoryTitle: string;
    inventoryCount: string;
    colProduct: string;
    colCategory: string;
    colPrice: string;
    colStock: string;
    colStatus: string;
    statusActive: string;
    statusOut: string;
    alertSuccess: string;
  };
  profile: {
    title: string;
    member: string;
    orders: string;
    delivered: string;
    onWay: string;
    account: string;
    wishlist: string;
    addresses: string;
    payments: string;
    settings: string;
    logout: string;
  };
  filter: {
    allProducts: string;
    sort: {
      label: string;
      featured: string;
      priceAsc: string;
      priceDesc: string;
      rating: string;
    }
  };
  categories: string[];
  products: Product[];
}

export const DATA: Record<Language, TranslationData> = {
  es: {
    nav: {
      searchPlaceholder: 'Buscar ropa, tendencias...',
      sellerMode: 'Soy Vendedor',
      buyerMode: 'Volver a Comprar',
      sellerActive: 'Modo Vendedor Activo',
    },
    hero: {
      badge: 'Nueva Colección 2025',
      titleStart: 'Estilo Urbano',
      titleEnd: 'que inspira calma.',
      subtitle: 'Descubre prendas diseñadas para tu comodidad y confianza. Materiales suaves, cortes modernos y la seguridad que mereces en cada compra.',
      cta: 'Ver Catálogo',
    },
    ui: {
      addToCart: 'Agregar',
      verified: 'Verificado',
      reviews: 'Reseñas',
      results: 'resultados',
      noResults: 'No se encontraron productos con estos filtros.',
      viewCatalog: 'Ver todo el catálogo',
      explore: 'Explora por Categoría',
      exploreSubtitle: 'Desliza para ver más prendas de nuestra colección.',
      trends: '🔥 Tendencias de la Semana'
    },
    cart: {
      title: 'Tu Bolsa de Compras',
      empty: 'Tu carrito está vacío.',
      keepShopping: 'Seguir comprando',
      remove: 'Eliminar',
      secure: 'Pago Seguro SSL',
      receipt: 'Boleta Electrónica',
      total: 'Total Estimado',
      taxes: 'Impuestos y envío calculados al finalizar la compra.',
      checkout: 'Ir a Pagar (Checkout Seguro)',
    },
    seller: {
      title: 'Panel de Vendedor',
      subtitle: 'Gestiona tu inventario y agrega nuevos productos de forma simple.',
      newProduct: 'Nuevo Producto',
      nameLabel: 'Nombre del Producto',
      namePlaceholder: 'Ej: Vestido de Lino',
      categoryLabel: 'Categoría',
      priceLabel: 'Precio (CLP)',
      stockLabel: 'Stock Inicial',
      stockPlaceholder: 'Ej: 10',
      submit: 'Publicar Producto',
      inventoryTitle: 'Inventario Actual',
      inventoryCount: 'Productos',
      colProduct: 'Producto',
      colCategory: 'Categoría',
      colPrice: 'Precio',
      colStock: 'Stock',
      colStatus: 'Estado',
      statusActive: 'Activo',
      statusOut: 'Agotado',
      alertSuccess: 'Producto agregado exitosamente',
    },
    profile: {
      title: 'Mi Perfil',
      member: 'Cliente VIP',
      orders: 'Mis Pedidos',
      delivered: 'Entregado',
      onWay: 'En Camino',
      account: 'Mi Cuenta',
      wishlist: 'Lista de Deseos',
      addresses: 'Direcciones de Envío',
      payments: 'Métodos de Pago',
      settings: 'Configuración',
      logout: 'Cerrar Sesión',
    },
    filter: {
      allProducts: 'Todos los Productos',
      sort: {
        label: 'Ordenar por',
        featured: 'Destacados',
        priceAsc: 'Menor Precio',
        priceDesc: 'Mayor Precio',
        rating: 'Mejor Valorados',
      }
    },
    categories: ['Todas', 'Blusas', 'Pantalones', 'Vestidos', 'Abrigos'],
    products: [
      {
        id: '1',
        name: 'Blusa Lino Verano',
        price: 24990,
        image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&q=80&w=600',
        rating: 4.8,
        reviewsCount: 124,
        stock: 15,
        category: 'Blusas'
      },
      {
        id: '2',
        name: 'Jeans Mom Fit',
        price: 32990,
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=600',
        rating: 4.5,
        reviewsCount: 89,
        stock: 8,
        category: 'Pantalones'
      },
      {
        id: '3',
        name: 'Vestido Floral Maxi',
        price: 45990,
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=600',
        rating: 4.9,
        reviewsCount: 210,
        stock: 5,
        category: 'Vestidos'
      },
      {
        id: '4',
        name: 'Chaqueta Ligera Beige',
        price: 39990,
        image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=600',
        rating: 4.2,
        reviewsCount: 45,
        stock: 20,
        category: 'Abrigos'
      },
      {
        id: '5',
        name: 'Sweater Tejido Oversize',
        price: 29990,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=600',
        rating: 4.7,
        reviewsCount: 156,
        stock: 12,
        category: 'Abrigos'
      },
      {
        id: '6',
        name: 'Falda Midi Satinada',
        price: 22990,
        image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80&w=600',
        rating: 4.6,
        reviewsCount: 78,
        stock: 10,
        category: 'Vestidos'
      },
      {
        id: '7',
        name: 'Top Básico Algodón',
        price: 12990,
        image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&q=80&w=600',
        rating: 4.3,
        reviewsCount: 230,
        stock: 40,
        category: 'Blusas'
      },
      {
        id: '8',
        name: 'Pantalón Lino Beige',
        price: 28990,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=600',
        rating: 4.8,
        reviewsCount: 56,
        stock: 14,
        category: 'Pantalones'
      },
      {
        id: '9',
        name: 'Trench Coat Clásico',
        price: 54990,
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600',
        rating: 4.9,
        reviewsCount: 88,
        stock: 10,
        category: 'Abrigos'
      },
      {
        id: '10',
        name: 'Vestido Noche Negro',
        price: 49990,
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=600',
        rating: 4.7,
        reviewsCount: 42,
        stock: 7,
        category: 'Vestidos'
      },
      {
        id: '11',
        name: 'Jeans Skinny Negro',
        price: 29990,
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=600',
        rating: 4.4,
        reviewsCount: 115,
        stock: 25,
        category: 'Pantalones'
      },
      {
        id: '12',
        name: 'Camisa Seda Blanca',
        price: 34990,
        image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&q=80&w=600',
        rating: 4.6,
        reviewsCount: 67,
        stock: 12,
        category: 'Blusas'
      },
      {
        id: '13',
        name: 'Parka Invierno Verde',
        price: 65990,
        image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80&w=600',
        rating: 4.8,
        reviewsCount: 210,
        stock: 5,
        category: 'Abrigos'
      },
      {
        id: '14',
        name: 'Vestido Casual Rayas',
        price: 19990,
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=600',
        rating: 4.3,
        reviewsCount: 95,
        stock: 18,
        category: 'Vestidos'
      },
      {
        id: '15',
        name: 'Shorts Denim Vintage',
        price: 18990,
        image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=600',
        rating: 4.5,
        reviewsCount: 150,
        stock: 30,
        category: 'Pantalones'
      },
      {
        id: '16',
        name: 'Blusa Estampada Flores',
        price: 21990,
        image: 'https://images.unsplash.com/photo-1506634572416-48cdfe530110?auto=format&fit=crop&q=80&w=600',
        rating: 4.2,
        reviewsCount: 34,
        stock: 15,
        category: 'Blusas'
      },
      {
        id: '17',
        name: 'Chaqueta Cuero Vegano',
        price: 42990,
        image: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&q=80&w=600',
        rating: 4.7,
        reviewsCount: 120,
        stock: 8,
        category: 'Abrigos'
      },
      {
        id: '18',
        name: 'Pantalón Cargo Beige',
        price: 31990,
        image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&q=80&w=600',
        rating: 4.6,
        reviewsCount: 75,
        stock: 14,
        category: 'Pantalones'
      },
      {
        id: '19',
        name: 'Vestido Midi Rojo',
        price: 36990,
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600',
        rating: 4.8,
        reviewsCount: 60,
        stock: 6,
        category: 'Vestidos'
      },
      {
        id: '20',
        name: 'Top Hombros Descubiertos',
        price: 14990,
        image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=600',
        rating: 4.4,
        reviewsCount: 180,
        stock: 22,
        category: 'Blusas'
      },
      {
        id: '21',
        name: 'Blazer Negro Clásico',
        price: 49990,
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=600',
        rating: 4.8,
        reviewsCount: 92,
        stock: 10,
        category: 'Abrigos'
      },
      {
        id: '22',
        name: 'Polera Básica Rayas',
        price: 15990,
        image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600',
        rating: 4.3,
        reviewsCount: 150,
        stock: 45,
        category: 'Blusas'
      },
      {
        id: '23',
        name: 'Vestido Verano Amarillo',
        price: 28990,
        image: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?auto=format&fit=crop&q=80&w=600',
        rating: 4.7,
        reviewsCount: 84,
        stock: 9,
        category: 'Vestidos'
      },
      {
        id: '24',
        name: 'Jeans Rectos Azul',
        price: 34990,
        image: 'https://images.unsplash.com/photo-1605518216938-7f31b7b14ad0?auto=format&fit=crop&q=80&w=600',
        rating: 4.5,
        reviewsCount: 110,
        stock: 16,
        category: 'Pantalones'
      },
      {
        id: '25',
        name: 'Cardigan Punto Grueso',
        price: 38990,
        image: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=600',
        rating: 4.9,
        reviewsCount: 56,
        stock: 7,
        category: 'Abrigos'
      },
      {
        id: '26',
        name: 'Falda Plisada Rosa',
        price: 26990,
        image: 'https://images.unsplash.com/photo-1617019114583-d50332c3e11c?auto=format&fit=crop&q=80&w=600',
        rating: 4.4,
        reviewsCount: 65,
        stock: 12,
        category: 'Vestidos'
      },
      {
        id: '27',
        name: 'Camisa Denim',
        price: 29990,
        image: 'https://images.unsplash.com/photo-1527448340055-3030018c3129?auto=format&fit=crop&q=80&w=600',
        rating: 4.6,
        reviewsCount: 88,
        stock: 20,
        category: 'Blusas'
      },
      {
        id: '28',
        name: 'Pantalón Vestir Gris',
        price: 32990,
        image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&q=80&w=600',
        rating: 4.5,
        reviewsCount: 40,
        stock: 14,
        category: 'Pantalones'
      },
      {
        id: '29',
        name: 'Abrigo Lana Camel',
        price: 79990,
        image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80&w=600',
        rating: 5.0,
        reviewsCount: 30,
        stock: 5,
        category: 'Abrigos'
      },
      {
        id: '30',
        name: 'Vestido Cóctel Azul',
        price: 42990,
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=600',
        rating: 4.8,
        reviewsCount: 55,
        stock: 6,
        category: 'Vestidos'
      },
      {
        id: '31',
        name: 'Top Seda Tirantes',
        price: 18990,
        image: 'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?auto=format&fit=crop&q=80&w=600',
        rating: 4.4,
        reviewsCount: 125,
        stock: 25,
        category: 'Blusas'
      },
      {
        id: '32',
        name: 'Joggers Urbanos',
        price: 24990,
        image: 'https://images.unsplash.com/photo-1588647008107-16d41a82d02a?auto=format&fit=crop&q=80&w=600',
        rating: 4.6,
        reviewsCount: 95,
        stock: 30,
        category: 'Pantalones'
      }
    ]
  },
  en: {
    nav: {
      searchPlaceholder: 'Search clothes, trends...',
      sellerMode: 'I am a Seller',
      buyerMode: 'Back to Shopping',
      sellerActive: 'Seller Mode Active',
    },
    hero: {
      badge: 'New Collection 2025',
      titleStart: 'Urban Style',
      titleEnd: 'that inspires calm.',
      subtitle: 'Discover garments designed for your comfort and confidence. Soft materials, modern cuts, and the security you deserve in every purchase.',
      cta: 'View Catalog',
    },
    ui: {
      addToCart: 'Add to Cart',
      verified: 'Verified',
      reviews: 'Reviews',
      results: 'results',
      noResults: 'No products found with these filters.',
      viewCatalog: 'View full catalog',
      explore: 'Explore by Category',
      exploreSubtitle: 'Swipe to see more items from our collection.',
      trends: '🔥 Trends of the Week'
    },
    cart: {
      title: 'Your Shopping Bag',
      empty: 'Your cart is empty.',
      keepShopping: 'Keep shopping',
      remove: 'Remove',
      secure: 'Secure SSL Payment',
      receipt: 'Digital Receipt',
      total: 'Estimated Total',
      taxes: 'Taxes and shipping calculated at checkout.',
      checkout: 'Go to Checkout (Secure)',
    },
    seller: {
      title: 'Seller Dashboard',
      subtitle: 'Manage your inventory and add new products easily.',
      newProduct: 'New Product',
      nameLabel: 'Product Name',
      namePlaceholder: 'Ex: Linen Dress',
      categoryLabel: 'Category',
      priceLabel: 'Price (CLP)',
      stockLabel: 'Initial Stock',
      stockPlaceholder: 'Ex: 10',
      submit: 'Publish Product',
      inventoryTitle: 'Current Inventory',
      inventoryCount: 'Products',
      colProduct: 'Product',
      colCategory: 'Category',
      colPrice: 'Price',
      colStock: 'Stock',
      colStatus: 'Status',
      statusActive: 'Active',
      statusOut: 'Out of Stock',
      alertSuccess: 'Product added successfully',
    },
    profile: {
      title: 'My Profile',
      member: 'VIP Customer',
      orders: 'My Orders',
      delivered: 'Delivered',
      onWay: 'On the Way',
      account: 'My Account',
      wishlist: 'Wishlist',
      addresses: 'Shipping Addresses',
      payments: 'Payment Methods',
      settings: 'Settings',
      logout: 'Log Out',
    },
    filter: {
      allProducts: 'All Products',
      sort: {
        label: 'Sort by',
        featured: 'Featured',
        priceAsc: 'Lowest Price',
        priceDesc: 'Highest Price',
        rating: 'Top Rated',
      }
    },
    categories: ['All', 'Blouses', 'Pants', 'Dresses', 'Coats'],
    products: [
      {
        id: '1',
        name: 'Summer Linen Blouse',
        price: 24990,
        image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&q=80&w=600',
        rating: 4.8,
        reviewsCount: 124,
        stock: 15,
        category: 'Blouses'
      },
      {
        id: '2',
        name: 'Mom Fit Jeans',
        price: 32990,
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=600',
        rating: 4.5,
        reviewsCount: 89,
        stock: 8,
        category: 'Pants'
      },
      {
        id: '3',
        name: 'Floral Maxi Dress',
        price: 45990,
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=600',
        rating: 4.9,
        reviewsCount: 210,
        stock: 5,
        category: 'Dresses'
      },
      {
        id: '4',
        name: 'Light Beige Jacket',
        price: 39990,
        image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=600',
        rating: 4.2,
        reviewsCount: 45,
        stock: 20,
        category: 'Coats'
      },
      {
        id: '5',
        name: 'Oversize Knitted Sweater',
        price: 29990,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=600',
        rating: 4.7,
        reviewsCount: 156,
        stock: 12,
        category: 'Coats'
      },
      {
        id: '6',
        name: 'Satin Midi Skirt',
        price: 22990,
        image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80&w=600',
        rating: 4.6,
        reviewsCount: 78,
        stock: 10,
        category: 'Dresses'
      },
      {
        id: '7',
        name: 'Basic Cotton Top',
        price: 12990,
        image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&q=80&w=600',
        rating: 4.3,
        reviewsCount: 230,
        stock: 40,
        category: 'Blouses'
      },
      {
        id: '8',
        name: 'Beige Linen Trousers',
        price: 28990,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=600',
        rating: 4.8,
        reviewsCount: 56,
        stock: 14,
        category: 'Pants'
      },
      {
        id: '9',
        name: 'Classic Trench Coat',
        price: 54990,
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600',
        rating: 4.9,
        reviewsCount: 88,
        stock: 10,
        category: 'Coats'
      },
      {
        id: '10',
        name: 'Black Evening Dress',
        price: 49990,
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=600',
        rating: 4.7,
        reviewsCount: 42,
        stock: 7,
        category: 'Dresses'
      },
      {
        id: '11',
        name: 'Black Skinny Jeans',
        price: 29990,
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=600',
        rating: 4.4,
        reviewsCount: 115,
        stock: 25,
        category: 'Pants'
      },
      {
        id: '12',
        name: 'White Silk Shirt',
        price: 34990,
        image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&q=80&w=600',
        rating: 4.6,
        reviewsCount: 67,
        stock: 12,
        category: 'Blouses'
      },
      {
        id: '13',
        name: 'Green Winter Parka',
        price: 65990,
        image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80&w=600',
        rating: 4.8,
        reviewsCount: 210,
        stock: 5,
        category: 'Coats'
      },
      {
        id: '14',
        name: 'Striped Casual Dress',
        price: 19990,
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=600',
        rating: 4.3,
        reviewsCount: 95,
        stock: 18,
        category: 'Dresses'
      },
      {
        id: '15',
        name: 'Vintage Denim Shorts',
        price: 18990,
        image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=600',
        rating: 4.5,
        reviewsCount: 150,
        stock: 30,
        category: 'Pants'
      },
      {
        id: '16',
        name: 'Floral Printed Blouse',
        price: 21990,
        image: 'https://images.unsplash.com/photo-1506634572416-48cdfe530110?auto=format&fit=crop&q=80&w=600',
        rating: 4.2,
        reviewsCount: 34,
        stock: 15,
        category: 'Blouses'
      },
      {
        id: '17',
        name: 'Vegan Leather Jacket',
        price: 42990,
        image: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&q=80&w=600',
        rating: 4.7,
        reviewsCount: 120,
        stock: 8,
        category: 'Coats'
      },
      {
        id: '18',
        name: 'Beige Cargo Pants',
        price: 31990,
        image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&q=80&w=600',
        rating: 4.6,
        reviewsCount: 75,
        stock: 14,
        category: 'Pants'
      },
      {
        id: '19',
        name: 'Red Midi Dress',
        price: 36990,
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600',
        rating: 4.8,
        reviewsCount: 60,
        stock: 6,
        category: 'Dresses'
      },
      {
        id: '20',
        name: 'Off-Shoulder Top',
        price: 14990,
        image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=600',
        rating: 4.4,
        reviewsCount: 180,
        stock: 22,
        category: 'Blouses'
      },
      {
        id: '21',
        name: 'Classic Black Blazer',
        price: 49990,
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=600',
        rating: 4.8,
        reviewsCount: 92,
        stock: 10,
        category: 'Coats'
      },
      {
        id: '22',
        name: 'Basic Striped Tee',
        price: 15990,
        image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600',
        rating: 4.3,
        reviewsCount: 150,
        stock: 45,
        category: 'Blouses'
      },
      {
        id: '23',
        name: 'Yellow Summer Dress',
        price: 28990,
        image: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?auto=format&fit=crop&q=80&w=600',
        rating: 4.7,
        reviewsCount: 84,
        stock: 9,
        category: 'Dresses'
      },
      {
        id: '24',
        name: 'Straight Leg Blue Jeans',
        price: 34990,
        image: 'https://images.unsplash.com/photo-1605518216938-7f31b7b14ad0?auto=format&fit=crop&q=80&w=600',
        rating: 4.5,
        reviewsCount: 110,
        stock: 16,
        category: 'Pants'
      },
      {
        id: '25',
        name: 'Chunky Knit Cardigan',
        price: 38990,
        image: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=600',
        rating: 4.9,
        reviewsCount: 56,
        stock: 7,
        category: 'Coats'
      },
      {
        id: '26',
        name: 'Pink Pleated Skirt',
        price: 26990,
        image: 'https://images.unsplash.com/photo-1617019114583-d50332c3e11c?auto=format&fit=crop&q=80&w=600',
        rating: 4.4,
        reviewsCount: 65,
        stock: 12,
        category: 'Dresses'
      },
      {
        id: '27',
        name: 'Denim Shirt',
        price: 29990,
        image: 'https://images.unsplash.com/photo-1527448340055-3030018c3129?auto=format&fit=crop&q=80&w=600',
        rating: 4.6,
        reviewsCount: 88,
        stock: 20,
        category: 'Blouses'
      },
      {
        id: '28',
        name: 'Grey Dress Pants',
        price: 32990,
        image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&q=80&w=600',
        rating: 4.5,
        reviewsCount: 40,
        stock: 14,
        category: 'Pants'
      },
      {
        id: '29',
        name: 'Camel Wool Coat',
        price: 79990,
        image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80&w=600',
        rating: 5.0,
        reviewsCount: 30,
        stock: 5,
        category: 'Coats'
      },
      {
        id: '30',
        name: 'Blue Cocktail Dress',
        price: 42990,
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=600',
        rating: 4.8,
        reviewsCount: 55,
        stock: 6,
        category: 'Dresses'
      },
      {
        id: '31',
        name: 'Silk Cami Top',
        price: 18990,
        image: 'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?auto=format&fit=crop&q=80&w=600',
        rating: 4.4,
        reviewsCount: 125,
        stock: 25,
        category: 'Blouses'
      },
      {
        id: '32',
        name: 'Urban Joggers',
        price: 24990,
        image: 'https://images.unsplash.com/photo-1588647008107-16d41a82d02a?auto=format&fit=crop&q=80&w=600',
        rating: 4.6,
        reviewsCount: 95,
        stock: 30,
        category: 'Pants'
      }
    ]
  }
};
