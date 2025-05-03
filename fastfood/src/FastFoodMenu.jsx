import React, { useState, useRef } from 'react';
import LoginRegister from './LoginRegister';
import {FaShoppingCart} from 'react-icons/fa';

const categories = [
  { name: 'Burger', image: '/hamburger.png' },
  { name: 'Gà Rán & Gà Viên', image: '/ga.png' },
  { name: 'Món Ăn Kèm', image: '/seafood.png' },
  { name: 'Món Chính Khác', image: '/mon chinh khac.png' },
  { name: 'Nước Giải Khát', image: '/nuoc giai khat.png' },
  { name: 'Combo Siêu Tiết Kiệm', image: '/combo tiet kiem.png' },
];

const products = [
  // Burger
  { id: 1, name: 'Buger Thịt Bò', price: 45000, image: '/burger/burger bo.png', category: 'Burger' },
  { id: 2, name: 'Burger Thịt Gà Giòn', price: 40000, image: '/burger/burger ga gion.png', category: 'Burger' },
  { id: 3, name: 'Burger Nấm', price: 30000, image: '/burger/burger nam.png', category: 'Burger' },
  { id: 4, name: 'Burger Thịt Lợn', price: 45000, image: '/burger/burger thit lon.png', category: 'Burger' },
  { id: 5, name: 'Burger Trứng Gà', price: 20000, image: '/burger/burger trung ga.png', category: 'Burger' },
  { id: 6, name: 'Burger Trứng & Thịt Xông Khói', price: 48000, image: '/burger/burger trung va thit xong khoi.png', category: 'Burger' },
  // Gà Rán & Gà Viên
  { id: 7, name: 'Gà Rán (2 miếng)', price: 38000, image: '/ga/ga 2 mieng.png', category: 'Gà Rán & Gà Viên' },
  { id: 8, name: 'Gà Rán (4 miếng)', price: 70000, image: '/ga/ga 4 mieng.png', category: 'Gà Rán & Gà Viên' },
  { id: 9, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Gà Rán & Gà Viên' },
  { id: 10, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Gà Rán & Gà Viên' },
  { id: 11, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Gà Rán & Gà Viên' },
  { id: 12, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Gà Rán & Gà Viên' },
  // Món Ăn Kèm
  { id: 13, name: 'Phô Mai Que (3 que)', price: 25000, image: '/mon an kem/pho mai que.png', category: 'Món Ăn Kèm' },
  { id: 14, name: 'Salad Trộn Mayonnaise', price: 20000, image: '/mon an kem/salad tron mayonnaise.png', category: 'Món Ăn Kèm' },
  { id: 15, name: 'Phô Mai Que (3 que)', price: 25000, image: '/mon an kem/pho mai que.png', category: 'Món Ăn Kèm' },
  { id: 16, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Món Ăn Kèm' },
  { id: 17, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Món Ăn Kèm' },
  { id: 18, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Món Ăn Kèm' },
  // Món Chính Khác
  { id: 19, name: 'Cơm Bò Sốt Teriyaki', price: 59000, image: '/mon chinh khac/com bo teriyaki.png', category: 'Món Chính Khác' },
  { id: 20, name: 'Grilled squid satay', price: 123000, image: '/seafood.png', category: 'Món Chính Khác' },
  { id: 21, name: 'Mì Ý Sốt Cà Chua', price: 39000, image: '/mon chinh khac/mi y sot ca chua.png', category: 'Món Chính Khác' },
  { id: 22, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Món Chính Khác' },
  { id: 23, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Món Chính Khác' },
  { id: 24, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Món Chính Khác' },
  // Nước Giải Khát
  { id: 25, name: 'Nước Ngọt Coca (Lon)', price: 15000, image: '/nuoc giai khat/nuoc ngot/coca.png', category: 'Nước Giải Khát' },
  { id: 26, name: 'Nước Ngọt Pepsi (Lon)', price: 15000, image: '/nuoc giai khat/nuoc ngot/pepsi.png', category: 'Nước Giải Khát' },
  { id: 27, name: 'Nước Ngọt 7 Up (Lon)', price: 15000, image: '/nuoc giai khat/nuoc ngot/7up.png', category: 'Nước Giải Khát' },
  { id: 28, name: 'Nước Ngọt Sprite (Lon)', price: 15000, image: '/nuoc giai khat/nuoc ngot/sprite.png', category: 'Nước Giải Khát' },
  { id: 29, name: 'Nước Ngọt Mirinda (Lon)', price: 15000, image: '/nuoc giai khat/nuoc ngot/mirinda.png', category: 'Nước Giải Khát' },
  { id: 30, name: 'Nước Tăng Lực Sting (Lon)', price: 15000, image: '/nuoc giai khat/nuoc ngot/sting.png', category: 'Nước Giải Khát' },
  // Combo Siêu Tiết Kiệm
  { id: 31, name: 'Combo 1: Burger Bò + Khoai Tây + Trà Tắc', price: 65000, image: '/combo tiet kiem/combo 1.png', category: 'Combo Siêu Tiết Kiệm' },
  { id: 32, name: 'Grilled squid satay', price: 123000, image: '/seafood.png', category: 'Combo Siêu Tiết Kiệm' },
  { id: 33, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Combo Siêu Tiết Kiệm' },
  { id: 34, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Combo Siêu Tiết Kiệm' },
  { id: 35, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Combo Siêu Tiết Kiệm' },
  { id: 36, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Combo Siêu Tiết Kiệm' },
];

const FastFoodMenu = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Sea Food');
  const [sortOrder, setSortOrder] = useState(null);
  const [showSortMenu, setShowSortMenu] = useState(false); // toggle menu
  const [selectedProduct, setSelectedProduct] = useState(null); // lưu sản phẩm đang xem chi tiết
  const [quantity, setQuantity] = useState(1); // số lượng đặt
  const [sideDishes, setSideDishes] = useState([]); // topping phụ kèm
  const [categoryIndex, setCategoryIndex] = useState(0);
  const categoryRefs = useRef([]);
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleLoginSuccess = () => {
    setShowLogin(false);
    // thực hiện xử lý sau đăng nhập nếu cần
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

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
    setSideDishes([]);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0); // tính lại total dựa trên số lượng

  const filteredProducts = products
    .filter((p) => p.category === selectedCategory)
    .sort((a, b) => {
      if (sortOrder === 'asc') return a.price - b.price;
      if (sortOrder === 'desc') return b.price - a.price;
      return 0;
    });

  return (
    <div style={{ backgroundColor: '#FFF8E1' }}>
      {/* HEADER */}
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" /> {/* Đổi thành ảnh logo của bạn */}
          <h1 className="text-2xl font-bold text-red-500">FastFood</h1>
        </div>
        <div className="flex space-x-4">
          <button className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500">Khuyến Mãi</button>
          <button onClick={handleLoginClick} className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500">Đăng Nhập</button>
        </div>
      </div>
    </header>

    {/* BODY CHÍNH */}
    <div className="flex min-h-screen">
      <div className="flex w-full max-w-[1440px] mx-auto">
        {/* Popup chi tiết sản phẩm */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-[600px] shadow-lg relative">
              <button onClick={() => setSelectedProduct(null)} className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl">&times;</button>
              <div className="flex">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-32 h-32 object-contain mr-4" />
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-1">{selectedProduct.name}</h2>
                  <p className="text-sm text-gray-600 mb-2">SKU: {selectedProduct.id} | Category: {selectedProduct.category}</p>
                  <p className="text-red-500 font-bold text-lg">Đơn giá: {selectedProduct.price.toLocaleString()}₫</p>
                  <div className="flex items-center mt-4 space-x-4">
                    <span className="font-semibold">Quantity:</span>
                    <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-2 py-1 bg-gray-200 rounded text-lg">-</button>
                    <span className="text-lg">{quantity}</span>
                    <button onClick={() => setQuantity((q) => q + 1)} className="px-2 py-1 bg-gray-200 rounded text-lg">+</button>
                  </div>
                  <div className="mt-4">
                    <p className="font-semibold mb-1">Side dishes (*)</p>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={sideDishes.includes('Vegetables')}
                        onChange={() => {
                          if (sideDishes.includes('Vegetables')) {
                            setSideDishes(sideDishes.filter(d => d !== 'Vegetables'));
                          } else {
                            setSideDishes([...sideDishes, 'Vegetables']);
                          }
                        }}
                      />
                      <span>Vegetables</span>
                    </label>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  addToCart({ ...selectedProduct, quantity });
                  setSelectedProduct(null);
                }}
                className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white text-lg py-3 rounded flex items-center justify-center space-x-2"
              >
                <FaShoppingCart />
                <span>{(selectedProduct.price * quantity).toLocaleString()}₫</span>
              </button>
            </div>
          </div>
        )}

        {/* Left Content */}
        <div className="flex-1 p-4">
          {/* Category giao diện thanh danh mục */}
          <div className="relative flex items-center justify-center mb-8">
            {/* Thanh danh mục – ẩn cuộn, hiển thị 4 mục */}
            <div
              id="category-scroll"
              className="flex px-12 py-4 space-x-6 overflow-hidden"
              style={{
                scrollBehavior: 'smooth',
                width: '100%',
                maxWidth: '880px', // Hiển thị vừa 4 mục nếu mỗi mục ~200px
              }}
            >
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  ref={(el) => (categoryRefs.current[idx] = el)}
                  onClick={() => {
                    setSelectedCategory(cat.name);
                    setCategoryIndex(idx);; // đồng bộ lại chỉ số
                    categoryRefs.current[idx]?.scrollIntoView({
                      behavior: 'smooth',
                      inline: 'center',
                      block: 'nearest',
                    });
                  }}
                  className={`min-w-[200px] max-w-[200px] h-[140px] rounded-xl shadow-md flex flex-col items-center justify-center cursor-pointer transition-transform ${
                    selectedCategory === cat.name
                      ? 'bg-orange-300 text-black font-semibold scale-105'
                      : 'bg-white hover:scale-105'
                  }`}
                >
                  <img src={cat.image} alt={cat.name} className="w-12 h-12 mb-2 object-contain" />
                  <span className="text-sm font-semibold text-center">{cat.name}</span>
                </div>
              ))}
            </div>

            {/* Nút chuyển trái */}
            <button
              onClick={() => {
                if (categoryIndex > 0) {
                  const newIndex = categoryIndex - 1;
                  setCategoryIndex(newIndex);
                  setSelectedCategory(categories[newIndex].name);
                  document.getElementById('category-scroll').scrollBy({ left: -220, behavior: 'smooth' });
                }
              }}
              className="absolute left-0 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold z-10"
            >
              ‹
            </button>

            {/* Nút chuyển phải */}
            <button
              onClick={() => {
                if (categoryIndex < categories.length - 1) {
                  const newIndex = categoryIndex + 1;
                  setCategoryIndex(newIndex);
                  setSelectedCategory(categories[newIndex].name);
                  document.getElementById('category-scroll').scrollBy({ left: 220, behavior: 'smooth' });
                }
              }}
              className="absolute right-0 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold z-10"
            >
              ›
            </button>
          </div>

          {/*Nút Sắp Xếp*/}
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

          {/* Product List */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-lg text-center flex flex-col justify-between transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => openProductDetail(product)}
              >
                <img src={product.image} alt={product.name} className="mx-auto h-24 object-contain mb-2" />
                <h2 className="text-md font-semibold mb-2">{index + 1}. {product.name}</h2>
                <p className="text-red-500 font-bold mb-2">{product.price.toLocaleString()}₫</p>
                <button
                  className="bg-red-500 p-3 rounded-full text-white hover:bg-red-600 mx-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart({ ...product, quantity: 1 });
                  }}
                >
                  <FaShoppingCart />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Cart */}
        <div className="w-1/3 bg-white p-4 shadow-lg flex flex-col" style={{ height: 'calc(100vh - 72px)' }}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Giỏ Hàng ({cart.length})</h2>
            <div className="flex gap-2">
              <button className="bg-blue-500 text-white px-3 py-1 rounded">DINE IN</button>
              {cart.length > 0 && (
                <button
                  onClick={() => setCart([])}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Xoá tất cả
                </button>
              )}
            </div>
          </div>
          {/* Cart Items giao diện hiển thị giỏ hàng*/}
          <div className="space-y-4 h-[60vh] overflow-y-auto pr-2">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-3">
                {/* Trái: Ảnh và mô tả */}
                <div className="flex items-center space-x-3 w-[60%]">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-contain" />
                  <div>
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-gray-500 text-xs">
                      {item.price.toLocaleString()}₫ x {item.quantity} = <strong>{(item.price * item.quantity).toLocaleString()}₫</strong>
                    </p>
                  </div>
                </div>

                {/* Phải: Các nút thao tác */}
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-8 h-8 flex items-center justify-center text-red-500 font-bold border-2 border-red-400 rounded-md hover:bg-red-100"
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => addToCart({ ...item, quantity: 1 })}
                    className="w-8 h-8 flex items-center justify-center text-green-500 font-bold border-2 border-green-400 rounded-md hover:bg-green-100"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Total and Payment */}
          <div className="mt-auto pt-4 border-t">
            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Tổng tiền:</span>
              <span>{total.toLocaleString()}₫</span>
            </div>
            <button className="w-full bg-red-500 text-white py-3 rounded-lg text-xl hover:bg-red-600">
              PAYMENT
            </button>
          </div>
        </div>
      </div>
      {/* Form đăng nhập hiển thị dạng overlay */}
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