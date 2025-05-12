// components/ProductDetailModal.jsx
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const ProductDetailModal = ({ product, quantity, setQuantity, onClose, onAddToCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[600px] shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl">&times;</button>
        <div className="flex">
          {/* <img src={product.image} alt={product.name} className="w-32 h-32 object-contain mr-4" /> */}
          <img src={`http://localhost:3001${product.image}`} alt={product.name} className="w-32 h-32 object-contain mr-4" />

          <div className="flex-1">
            <h2 className="text-xl font-bold mb-1">{product.name}</h2>
            <p className="text-sm text-gray-600 mb-2">
              SKU: {product.id} | Category: {product.category?.name || 'Không xác định'}
            </p>
            <p className="text-red-500 font-bold text-lg">
              Đơn giá: {product.price.toLocaleString()}₫
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <span className="font-semibold">Số Lượng:</span>
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-2 py-1 bg-gray-200 rounded text-lg">-</button>
              <span className="text-lg">{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)} className="px-2 py-1 bg-gray-200 rounded text-lg">+</button>
            </div>
            <div className="mt-4">
              <label htmlFor="note" className="font-semibold mb-1 block">Ghi chú thêm (nếu có):</label>
              <textarea
                id="note"
                name="note"
                rows="3"
                placeholder="Ví dụ: Không hành, ít sốt,..."
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-2"
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => onAddToCart({ ...product, quantity })}
          className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white text-lg py-3 rounded flex items-center justify-center space-x-2"
        >
          <FaShoppingCart />
          <span>{(product.price * quantity).toLocaleString()}₫</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetailModal;
