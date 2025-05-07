// components/FoodItem.jsx
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

/**
 * Hiển thị 1 sản phẩm đơn lẻ
 * Props:
 * - product: dữ liệu sản phẩm
 * - onClick: xem chi tiết
 * - onAddToCart: thêm vào giỏ
 */
const FoodItem = ({ product, index, onClick, onAddToCart }) => {
  return (
    <div
      className="bg-white p-4 rounded-lg shadow-lg text-center flex flex-col justify-between transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
      onClick={() => onClick(product)}
    >
      <img src={product.image} alt={product.name} className="mx-auto h-24 object-contain mb-2" />
      <h2 className="text-md font-semibold mb-2">{index + 1}. {product.name}</h2>
      <p className="text-red-500 font-bold mb-2">{product.price.toLocaleString()}₫</p>
      <button
        className="bg-red-500 p-3 rounded-full text-white hover:bg-red-600 mx-auto"
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart({ ...product, quantity: 1 });
        }}
      >
        <FaShoppingCart />
      </button>
    </div>
  );
};

export default FoodItem;