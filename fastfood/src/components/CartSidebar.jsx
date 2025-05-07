// components/CartSidebar.jsx
import React from 'react';

/**
 * Hiển thị giỏ hàng bên phải
 * Props:
 * - cart: danh sách sản phẩm trong giỏ
 * - addToCart, removeFromCart: tăng/giảm số lượng
 * - total: tổng tiền
 * - setCart: xoá toàn bộ giỏ
 */
const CartSidebar = ({ cart, addToCart, removeFromCart, total, setCart }) => {
  return (
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
      <div className="space-y-4 h-[60vh] overflow-y-auto pr-2">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center space-x-3 w-[60%]">
              <img src={item.image} alt={item.name} className="w-12 h-12 object-contain" />
              <div>
                <h4 className="font-medium text-sm">{item.name}</h4>
                <p className="text-gray-500 text-xs">
                  {item.price.toLocaleString()}₫ x {item.quantity} = <strong>{(item.price * item.quantity).toLocaleString()}₫</strong>
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => removeFromCart(item.id)}
                className="w-8 h-8 flex items-center justify-center text-red-500 font-bold border-2 border-red-400 rounded-md hover:bg-red-100"
              >-</button>
              <span className="px-2">{item.quantity}</span>
              <button
                onClick={() => addToCart({ ...item, quantity: 1 })}
                className="w-8 h-8 flex items-center justify-center text-green-500 font-bold border-2 border-green-400 rounded-md hover:bg-green-100"
              >+</button>
            </div>
          </div>
        ))}
      </div>
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
  );
};

export default CartSidebar;