import React, { useState, useRef } from 'react';
import { FaHome, FaShoppingCart } from 'react-icons/fa';

const categories = [
  { name: 'Cupcake', image: '/seafood.png' },
  { name: 'Sea Food', image: '/seafood.png' },
  { name: 'Juice', image: '/seafood.png' },
  { name: 'Nước Giải Khát', image: '/nuoc giai khat/nuoc ngot/coca.png' },
  { name: 'Orange Juice', image: '/seafood.png' },
  { name: 'Combo Siêu Tiết Kiệm', image: '/seafood.png' },
];

const products = [
  // Burger
  { id: 1, name: 'Hamburger', price: 123, image: '/hamburger.png', category: 'Cupcake' },
  { id: 2, name: 'Grilled squid satay', price: 123, image: '/hamburger.png', category: 'Cupcake' },
  { id: 3, name: 'Grilled squid satay', price: 321, image: '/seafood.png', category: 'Cupcake' },
  { id: 4, name: 'Grilled squid satay', price: 122, image: '/hamburger.png', category: 'Cupcake' },
  { id: 5, name: 'Grilled squid satay', price: 125, image: '/hamburger.png', category: 'Cupcake' },
  { id: 6, name: 'Grilled squid satay', price: 123, image: '/hamburger.png', category: 'Cupcake' },
  // Gà Rán & Gà Viên
  { id: 7, name: 'Hamburger', price: 123, image: '/hamburger.png', category: 'Sea Food' },
  { id: 8, name: 'Grilled squid satay', price: 123, image: '/hamburger.png', category: 'Sea Food' },
  { id: 9, name: 'Grilled squid satay', price: 123, image: '/hamburger.png', category: 'Sea Food' },
  { id: 10, name: 'Grilled squid satay', price: 123, image: '/hamburger.png', category: 'Sea Food' },
  { id: 11, name: 'Grilled squid satay', price: 123, image: '/hamburger.png', category: 'Sea Food' },
  { id: 12, name: 'Grilled squid satay', price: 123, image: '/hamburger.png', category: 'Sea Food' },
  // Món Ăn Kèm
  { id: 13, name: 'Hamburger', price: 123, image: '/hamburger.png', category: 'Juice' },
  { id: 14, name: 'Grilled squid satay', price: 123, image: '/hamburger.png', category: 'Juice' },
  { id: 15, name: 'Grilled squid satay', price: 123, image: '/hamburger.png', category: 'Juice' },
  { id: 16, name: 'Grilled squid satay', price: 123, image: '/hamburger.png', category: 'Juice' },
  { id: 17, name: 'Grilled squid satay', price: 123, image: '/hamburger.png', category: 'Juice' },
  { id: 18, name: 'Grilled squid satay', price: 123, image: '/hamburger.png', category: 'Juice' },
  // Nước Giải Khát
  { id: 19, name: 'Nước Ngọt Coca (Lon)', price: 123, image: '/nuoc giai khat/nuoc ngot/coca.png', category: 'Nước Giải Khát' },
  { id: 20, name: 'Nước Ngọt Pepsi (Lon)', price: 123, image: '/nuoc giai khat/nuoc ngot/pepsi.png', category: 'Nước Giải Khát' },
  { id: 21, name: 'Nước Ngọt 7 Up (Lon)', price: 123, image: '/nuoc giai khat/nuoc ngot/7up.png', category: 'Nước Giải Khát' },
  { id: 22, name: 'Nước Ngọt Sprite (Lon)', price: 123, image: '/nuoc giai khat/nuoc ngot/sprite.png', category: 'Nước Giải Khát' },
  { id: 23, name: 'Nước Ngọt Mirinda (Lon)', price: 123, image: '/nuoc giai khat/nuoc ngot/mirinda.png', category: 'Nước Giải Khát' },
  { id: 24, name: 'Nước Tăng Lực Sting (Lon)', price: 123, image: '/nuoc giai khat/nuoc ngot/sting.png', category: 'Nước Giải Khát' },
  // Món Ăn Chính Khác
  { id: 25, name: 'Hamburger', price: 123, image: '/hamburger.png', category: 'Orange Juice' },
  { id: 26, name: 'Grilled squid satay', price: 123, image: '/seafood.png', category: 'Orange Juice' },
  { id: 27, name: 'Grilled squid satay', price: 123, image: '/hamburger.png', category: 'Orange Juice' },
  { id: 28, name: 'Grilled squid satay', price: 123, image: '/hamburger.png', category: 'Orange Juice' },
  { id: 29, name: 'Grilled squid satay', price: 123, image: '/hamburger.png', category: 'Orange Juice' },
  { id: 30, name: 'Grilled squid satay', price: 123, image: '/hamburger.png', category: 'Orange Juice' },
  // Combo Siêu Tiết Kiệm
  { id: 31, name: 'Hamburger', price: 123, image: '/hamburger.png', category: 'Combo Siêu Tiết Kiệm' },
  { id: 32, name: 'Grilled squid satay', price: 123, image: '/seafood.png', category: 'Combo Siêu Tiết Kiệm' },
  { id: 33, name: 'Grilled squid satay', price: 123, image: '/hamburger.png', category: 'Combo Siêu Tiết Kiệm' },
  { id: 34, name: 'Grilled squid satay', price: 123, image: '/hamburger.png', category: 'Combo Siêu Tiết Kiệm' },
  { id: 35, name: 'Grilled squid satay', price: 123, image: '/hamburger.png', category: 'Combo Siêu Tiết Kiệm' },
  { id: 36, name: 'Grilled squid satay', price: 123, image: '/hamburger.png', category: 'Combo Siêu Tiết Kiệm' },
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
    <div className="flex min-h-screen" style={{ backgroundColor: '#FFF8E1' }}>
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
                  <p className="text-red-500 font-bold text-lg">Unit Price: Kr {selectedProduct.price},00</p>
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
                <span>Kr {(selectedProduct.price * quantity).toFixed(2)}</span>
              </button>
            </div>
          </div>
        )}

        {/* Left Content */}
        <div className="flex-1 p-4">
          {/* Top navigation */}
          <div className="flex items-center mb-4">
            <FaHome className="text-2xl mr-2" />
            <span className="text-xl font-semibold">Back to home</span>
          </div>

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
                <p className="text-red-500 font-bold mb-2">Kr {product.price},00</p>
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
        <div className="w-1/3 bg-white p-4 shadow-lg flex flex-col h-screen">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Your Cart ({cart.length})</h2>
            <button className="bg-blue-500 text-white px-3 py-1 rounded">DINE IN</button>
          </div>
          {/* Cart Items giao diện hiển thị giỏ hàng*/}
          <div className="space-y-4 h-[60vh] overflow-y-auto pr-2">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center space-x-2">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-contain" />
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-gray-500 text-sm">
                      Kr {item.price} x {item.quantity} = <strong>Kr {item.price * item.quantity}</strong>
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 font-bold text-lg">-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => addToCart({ ...item, quantity: 1 })} className="text-green-500 font-bold text-lg">+</button>
                </div>
              </div>
            ))}
          </div>
          {/* Total and Payment */}
          <div className="mt-auto pt-4 border-t">
            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Total:</span>
              <span>Kr {total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-red-500 text-white py-3 rounded-lg text-xl hover:bg-red-600">
              PAYMENT
            </button>
          </div>
        </div>
    </div>
  );
};

export default FastFoodMenu;