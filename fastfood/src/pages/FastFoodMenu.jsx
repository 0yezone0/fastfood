import React, { useState, useRef } from 'react';
import LoginRegister from './LoginRegister';
import { FaShoppingCart } from 'react-icons/fa';
import MenuList from '../components/MenuList';
import CategoryTabs from '../components/CategoryTabs';
import ProductDetailModal from '../components/ProductDetailModal';
import CartSidebar from '../components/CartSidebar';

import { categories, products } from '../data/data';

const FastFoodMenu = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Sea Food');
  const [sortOrder, setSortOrder] = useState(null);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const categoryRefs = useRef([]);
  const [showLogin, setShowLogin] = useState(false);
  const handleLoginClick = () => setShowLogin(true);
  const handleLoginSuccess = () => setShowLogin(false);
  const handleCloseLogin = () => setShowLogin(false);


  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      } else {
        return [...prevCart, product];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const filteredProducts = products
    .filter((p) =>
      p.category === selectedCategory &&
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') return a.price - b.price;
      if (sortOrder === 'desc') return b.price - a.price;
      return 0;
    });


  return (
    <div style={{ backgroundColor: '#FFF8E1' }}>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
            <h1 className="text-2xl font-bold text-red-500">FastFood</h1>
          </div>

          <div className="flex-1 mx-6">
            <input
              type="text"
              placeholder="Tìm kiếm món ăn..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex space-x-4">
            <button onClick={handleLoginClick} className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500">Đăng Nhập</button>
          </div>
        </div>
      </header>

      <div className="flex min-h-screen">
        <div className="flex w-full max-w-[1440px] mx-auto">
          {selectedProduct && (
            <ProductDetailModal
              product={selectedProduct}
              quantity={quantity}
              setQuantity={setQuantity}
              onClose={() => setSelectedProduct(null)}
              onAddToCart={(prod) => {
                addToCart(prod);
                setSelectedProduct(null);
              }}
            />
          )}

          <div className="flex-1 p-4">
            <CategoryTabs
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categoryIndex={categoryIndex}
              setCategoryIndex={setCategoryIndex}
              categoryRefs={categoryRefs}
            />

            <div className="relative mb-6">
              <button
                onClick={() => setShowSortMenu(!showSortMenu)}
                className="flex items-center px-4 py-2 bg-orange-100 text-orange-800 font-semibold rounded hover:bg-orange-200"
              >
                <FaShoppingCart className="mr-2" /> Sắp xếp
              </button>
              {showSortMenu && (
                <div className="absolute mt-2 w-40 bg-white rounded-lg shadow-lg z-10">
                  <button onClick={() => { setSortOrder(null); setShowSortMenu(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Không sắp xếp</button>
                  <button onClick={() => { setSortOrder('asc'); setShowSortMenu(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Giá tăng dần</button>
                  <button onClick={() => { setSortOrder('desc'); setShowSortMenu(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Giá giảm dần</button>
                </div>
              )}
            </div>

            <MenuList products={filteredProducts} onSelect={openProductDetail} onAddToCart={addToCart} />
          </div>

          <CartSidebar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} total={total} setCart={setCart} />
        </div>
        {showLogin && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative">
              <button
                onClick={handleCloseLogin}
                className="absolute top-2 right-2 text-gray-600 hover:text-black font-bold"
              >
                ✕
              </button>
              <LoginRegister onLoginSuccess={handleLoginSuccess} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FastFoodMenu;