// components/MenuList.jsx
import React from 'react';
import FoodItem from './FoodItem';

/**
 * Hiển thị danh sách sản phẩm theo category được chọn
 * Props:
 * - products: mảng sản phẩm đã lọc
 * - onSelect: chọn xem chi tiết
 * - onAddToCart: thêm vào giỏ hàng
 */
const MenuList = ({ products, onSelect, onAddToCart }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {products.map((product, index) => (
        <FoodItem
          key={product.id}
          product={product}
          index={index}
          onClick={onSelect}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default MenuList;