import React, { useState, useRef, useEffect } from 'react';
import LoginRegister from './LoginRegister';
import { FaShoppingCart } from 'react-icons/fa';
import MenuList from '../components/MenuList';
import CategoryTabs from '../components/CategoryTabs';
import ProductDetailModal from '../components/ProductDetailModal';
import CartSidebar from '../components/CartSidebar';
import { fetchProducts, fetchCategories } from '../api';
import axios from 'axios';

const FastFoodMenu = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState(null);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const categoryRefs = useRef([]);
  const [showLogin, setShowLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    const loadData = async () => {
      try {
        const prodRes = await fetchProducts();
        const catRes = await fetchCategories();
        setProducts(prodRes.data);
        setCategories(catRes.data);
        setSelectedCategory(catRes.data[0]?.name || '');
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
  }, []);

  const handleLoginClick = () => setShowLogin(true);
const handleLoginSuccess = (user) => {
  setCurrentUser(user);
  localStorage.setItem('currentUser', JSON.stringify(user)); // ✅ lưu vào localStorage
  setShowLogin(false);
};

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

const handleLogout = () => {
  setCurrentUser(null);
  localStorage.removeItem('currentUser'); // ✅ xóa localStorage
};

const handleCheckout = async () => {
  if (!currentUser) {
    alert('Vui lòng đăng nhập trước khi đặt hàng!');
    return;
  }

  if (cart.length === 0) {
    alert('Giỏ hàng của bạn đang trống!');
    return;
  }

  try {
    const orderData = {
      userId: currentUser.id, // lấy từ user đã đăng nhập
      orderDetails: cart.map(item => ({
        productId: item.id,
        quantity: item.quantity,
      })),
    };

    const response = await axios.post('http://localhost:3001/order', orderData);
    alert('Đặt hàng thành công!');
    setCart([]);
  } catch (error) {
    console.error(error);
    alert('Có lỗi khi đặt hàng!');
  }
};


  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const filteredProducts = products
    .filter((p) => p.category.name === selectedCategory)
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
      <div className="flex space-x-4 items-center">
      {currentUser ? (
        <div className="flex items-center space-x-2">
          <span className="text-gray-700 font-semibold">
            Xin chào, <span className="text-red-500">{currentUser.email}</span>
          </span>
          <button onClick={handleLogout} className="bg-orange-400 text-white px-3 py-1 rounded hover:bg-orange-500">
            Đăng Xuất
          </button>
        </div>
      ) : (
        <button onClick={handleLoginClick} className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500">
          Đăng Nhập
        </button>
      )}

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

            <MenuList
              products={filteredProducts}
              onSelect={openProductDetail}
              onAddToCart={addToCart}
            />
          </div>

          <CartSidebar
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            total={total}
            setCart={setCart}
            onCheckout={handleCheckout} // ✅ Truyền hàm xử lý thanh toán
          />
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
